"use client";
import styled from "styled-components";

export const TagPrimaryInput = styled.input`
  border-radius: 8px;
  padding: 10px 16px;
  margin: 19px 0;
  border: none;
  width: 352px;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
