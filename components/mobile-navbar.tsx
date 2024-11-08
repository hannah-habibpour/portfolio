"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickItem() {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }

  return (
    <div className="bg-white absolute top-0 left-0 w-full">
      <div className="p-[12px] flex justify-end">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? (
            <MdClose className="text-[24px]" />
          ) : (
            <FaBars className="text-[24px]" />
          )}
        </div>
      </div>
      <NavbarContent isOpen={isOpen} onClickItem={handleClickItem} />
    </div>
  );
}

interface NavbarContentProps {
  isOpen: boolean;
  onClickItem: () => void;
}

function NavbarContent({ isOpen, onClickItem }: NavbarContentProps) {
  return (
    <div
      className={`flex flex-col px-[16px] pb-[24px] relative h-[100svh] ${
        !isOpen && "hidden"
      }`}
    >
      <NavbarMenuItems onClick={onClickItem} />
    </div>
  );
}

interface NavbarMenuItemsProps {
  onClick: () => void;
}

function NavbarMenuItems({ onClick }: NavbarMenuItemsProps) {
  const menuItems = [
    {
      label: "Homepage",
      path: "/",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="mt-[16px] flex flex-col gap-[4px]">
      {menuItems.map((item) => (
        <Link href={item.path} key={item.label} onClick={onClick}>
          <div
            key={item.label}
            className={`flex flex-row items-center justify-start gap-[12px] py-[6px] px-[12px] cursor-pointer ${
              isActive(item.path) ? "text-white bg-[#FF6464]/90 rounded-lg" : ""
            }`}
          >
            <div className="text-[16px]">{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
