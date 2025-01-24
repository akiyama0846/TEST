import boto3
import json

s3_client = boto3.client('s3')
rekognition = boto3.client('rekognition')

def handler(event, context):
    try:
        # S3から画像の情報を取得
        bucket = event['Records'][0]['s3']['bucket']['name']
        key = event['Records'][0]['s3']['object']['key']

        print(f"Processing image from bucket: {bucket}, key: {key}")

        # S3オブジェクトの存在確認
        try:
            s3_client.head_object(Bucket=bucket, Key=key)
            print("S3 object exists and is accessible.")
        except Exception as s3_error:
            print(f"Error accessing S3 object: {str(s3_error)}")
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'S3 object not accessible', 'details': str(s3_error)})
            }

        # Amazon Rekognitionを使用して画像を解析
        response = rekognition.detect_labels(
            Image={'S3Object': {'Bucket': bucket, 'Name': key}},
            MaxLabels=5,  # 最大5つのラベルを取得
            MinConfidence=70  # 70%以上の信頼度のラベルのみ
        )

        labels = [label['Name'] for label in response['Labels']]
        print(f"Detected labels: {labels}")

        return {
            'statusCode': 200,
            'body': json.dumps({'labels': labels})
        }

    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
