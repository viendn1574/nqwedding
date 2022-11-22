/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GiftCreateFormInputValues = {
    name?: string;
    gift?: string;
};
export declare type GiftCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    gift?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GiftCreateFormOverridesProps = {
    GiftCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    gift?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GiftCreateFormProps = React.PropsWithChildren<{
    overrides?: GiftCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GiftCreateFormInputValues) => GiftCreateFormInputValues;
    onSuccess?: (fields: GiftCreateFormInputValues) => void;
    onError?: (fields: GiftCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GiftCreateFormInputValues) => GiftCreateFormInputValues;
    onValidate?: GiftCreateFormValidationValues;
} & React.CSSProperties>;
export default function GiftCreateForm(props: GiftCreateFormProps): React.ReactElement;
