import { Cart } from "../Cart/cart";
import PrimaryInput from "../PrimaryInput";
import { Logo, TagHeader } from "./header.styled";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <PrimaryInput placeholder="Procurando por algo específico?" />
        <Cart />
      </div>
    </TagHeader>
  );
}
