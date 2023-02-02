import React from "react";
import { Route } from "../../types/Route";
import { SidebarItem } from "./SidebarItem";

type SidebarListProps = {
  routes: Route[];
};

export const SidebarList = ({ routes }: SidebarListProps) => {
  return (
    <ul className="space-y-2">
      {routes.map((route) => (
        <SidebarItem key={route.id} href={route.url} icon={route.icon}>
          {route.name}
        </SidebarItem>
      ))}
    </ul>
  );
};
