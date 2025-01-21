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

            <StorageImage alt="sleepy-cat" path="public/cat.jpeg" />
            <FileUploader path="my_prefix/public" maxFileCount={3} />

            <FileUploader
                acceptedFileTypes={['image/*']}
                path="public/"
                maxFileCount={1}
                isResumable
            />
        </View>
    );
}
export default withAuthenticator(App);