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
export declare type ImageDataUpdateFormInputValues = {
    imageUrl?: string;
    labels?: string[];
    createdAt?: string;
};
export declare type ImageDataUpdateFormValidationValues = {
    imageUrl?: ValidationFunction<string>;
    labels?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageDataUpdateFormOverridesProps = {
    ImageDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    labels?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImageDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImageDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    imageData?: any;
    onSubmit?: (fields: ImageDataUpdateFormInputValues) => ImageDataUpdateFormInputValues;
    onSuccess?: (fields: ImageDataUpdateFormInputValues) => void;
    onError?: (fields: ImageDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImageDataUpdateFormInputValues) => ImageDataUpdateFormInputValues;
    onValidate?: ImageDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImageDataUpdateForm(props: ImageDataUpdateFormProps): React.ReactElement;
