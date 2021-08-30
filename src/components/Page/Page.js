import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Page({ children, className }) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Page;
