"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { CartContainer, CartCount } from "./cart.styled";

export function Cart() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <CartContainer>
      <CartIcon />
      {value.length ? <CartCount>{value.length}</CartCount> : null}
    </CartContainer>
  );
}
