/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImageDataCreateFormInputValues = {
    imageUrl?: string;
    labels?: string[];
    createdAt?: string;
};
export declare type ImageDataCreateFormValidationValues = {
    imageUrl?: ValidationFunction<string>;
    labels?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageDataCreateFormOverridesProps = {
    ImageDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    labels?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImageDataCreateFormProps = React.PropsWithChildren<{
    overrides?: ImageDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ImageDataCreateFormInputValues) => ImageDataCreateFormInputValues;
    onSuccess?: (fields: ImageDataCreateFormInputValues) => void;
    onError?: (fields: ImageDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImageDataCreateFormInputValues) => ImageDataCreateFormInputValues;
    onValidate?: ImageDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function ImageDataCreateForm(props: ImageDataCreateFormProps): React.ReactElement;
