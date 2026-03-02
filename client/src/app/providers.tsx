"use client";

import StoreProvider from "@/state/redux";
import { de } from "zod/v4/locales";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
