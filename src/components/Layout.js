import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="text-main grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto h-full ">
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
