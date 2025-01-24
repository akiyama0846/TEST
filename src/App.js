import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
} from "@aws-amplify/ui-react";
import React, { useState } from 'react';
import { Amplify} from "aws-amplify";
import { generateClient } from "aws-amplify/api"; 
import { FileUploader } from '@aws-amplify/ui-react-storage';
import awsExports from "./aws-exports";
import { listImageData } from './graphql/queries';

Amplify.configure(awsExports);

function App({ signOut }) {
    const [imageData, setImageData] = useState([]);
    const client = generateClient(awsExports);

    const fetchImageData = async () => {
        try {
            const response = await client.graphql({ query: listImageData });
            setImageData(response.data.listImageData.items);
        } catch (err) {
            console.error('データ取得エラー:', err);
        }
    };

    return (
        <View className="App">
            <Card>
                <Image src={logo} className="App-logo" alt="logo" />
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
       
            <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
                <h1>ファイルアップローダー</h1>
                <FileUploader
                    accessLevel="public"  // アップロードファイルのアクセスレベル（'private', 'protected', 'public'）
                    acceptedFileTypes={['image/*']}  // 画像ファイルのみ許可
                    variation="drop"  // ドラッグ＆ドロップUI
                    maxFileCount={1}  // 一度にアップロード可能なファイル数
                    hasMultipleFiles={false}
                    onSuccess={({ key }) => {
                        alert(`ファイルが正常にアップロードされました！\nファイルキー: ${key}`);
                    }}
                    onError={(error) => {
                        console.error('アップロードエラー:', error);
                        alert('アップロードに失敗しました');
                    }}
                />

                <h2>解析結果</h2>
                <ul>
                    {imageData.map((item, index) => (
                        <li key={index}>{item.imageUrl} - {item.labels?.join(', ')}</li>
                    ))}
                </ul>
            </div>
        </View>
    );
}
export default withAuthenticator(App);