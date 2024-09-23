import React from "react";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import FooterPage from "../components/FooterPage/FooterPage";
export default function Layout({ children }) {
  return (
    <div>
      <HeaderPage />
      {children}
      <FooterPage />
    </div>
  );
}
