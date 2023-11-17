import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../SearchIcon/search-icon";
import { TagPrimaryInput, InputWrapper } from "./primary-input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInput(props: InputProps) {
  return (
    <InputWrapper>
      <TagPrimaryInput {...props} />
      <SearchIcon />
    </InputWrapper>
  );
}
