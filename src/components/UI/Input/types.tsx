import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form/dist/types";

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

export type InputProps<T extends FieldValues> = {
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  labelText: Path<T>;
  name?: string;
  register: UseFormRegister<T>;
  required: boolean;
  pattern?: RegExp;
  errors?: FieldErrors;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
