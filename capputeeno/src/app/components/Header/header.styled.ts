"use client";
import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;
