import React from "react";

type SidebarItemProps = {
  children: string;
  href?: string;
  icon?: React.ReactNode;
};

export const SidebarItem = ({
  children,
  icon,
  href = "#",
}: SidebarItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="ml-3">{children}</span>
      </a>
    </li>
  );
};
