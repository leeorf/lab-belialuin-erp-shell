import React from "react";

import { PageLayout } from "../PageLayout/PageLayout";

type ShellProps = {
  children: React.ReactNode;
};

export const Shell = ({ children }: ShellProps) => (
  <PageLayout>{children}</PageLayout>
);
