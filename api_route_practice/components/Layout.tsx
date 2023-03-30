import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-4">{children}</main>

      <footer className="p-3 text-center">
        <span>&copy; Web Life CH</span>
      </footer>
    </div>
  );
};

export default Layout;
