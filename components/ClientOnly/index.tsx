"use client";

import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Header visible={visible} setVisible={setVisible} />
      <div onClick={() => setVisible(false)} className="overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ClientOnly;
