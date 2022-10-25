import { ReactNode } from "react";
import Header from "../../components/Header";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
