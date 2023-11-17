import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  margin-left: 24px;
`;

export const CartCount = styled.span`
  display: block;
  background-color: var(--default-red);
  border-radius: 50%;
  color: white;

  width: 17px;
  height: 17px;

  position: absolute;
  right: -8px;
  top: 50%;

  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;
