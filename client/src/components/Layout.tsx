import { FC } from "react";
import Head from "next/head";
import { Wrapper, WrapperVariant } from "./Wrapper";
import { NavBar } from "./NavBar";

interface LayoutProps {
  variant?: WrapperVariant;
  pageTitle?: string;
}

export const Layout: FC<LayoutProps> = ({ children, variant, pageTitle }) => {
  return (
    <>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      )}
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
