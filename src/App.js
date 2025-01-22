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
import { Amplify } from "aws-amplify";
import { StorageImage, FileUploader } from '@aws-amplify/ui-react-storage';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App({ signOut }) {
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
            </div>
        </View>
    );
}
export default withAuthenticator(App);