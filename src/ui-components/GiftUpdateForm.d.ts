/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Gift } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GiftUpdateFormInputValues = {
    name?: string;
    gift?: string;
};
export declare type GiftUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    gift?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GiftUpdateFormOverridesProps = {
    GiftUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    gift?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GiftUpdateFormProps = React.PropsWithChildren<{
    overrides?: GiftUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gift?: Gift;
    onSubmit?: (fields: GiftUpdateFormInputValues) => GiftUpdateFormInputValues;
    onSuccess?: (fields: GiftUpdateFormInputValues) => void;
    onError?: (fields: GiftUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GiftUpdateFormInputValues) => GiftUpdateFormInputValues;
    onValidate?: GiftUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GiftUpdateForm(props: GiftUpdateFormProps): React.ReactElement;
