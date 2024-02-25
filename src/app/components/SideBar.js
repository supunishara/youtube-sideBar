"use client";

import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import youtubeLogo from "../../assets/images/youtube_logo.png";
import HoverDiv from "./HoverDiv";
import { useState } from "react";
import { cn } from "../utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ytSidebarDataset } from "./sidebarData";

const SideBar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <section className="flex py-5 gap-4 items-center px-5">
        {/* menu Icon */}

        <HoverDiv className="p-2 rounded-full" onClick={toggleSideBar}>
          <TiThMenu className="text-[30px]" />
        </HoverDiv>

        <Image
          className="h-[40px] w-[40px] object-contain bg-slate-50 "
          src={youtubeLogo}
          alt="youtube-logo"
        />
        {/* youtube Iwcon */}
      </section>
      <main
        className={cn("flex flex-col w-[240px] h-full", {
          "w-[100px]": !isSideBarOpen,
        })}
      >
        {ytSidebarDataset.map((d, index) => (
          <>
            {d.title && (
              <section key={index} className="px-4 w-full">
                <SidebarItem
                  path={d.path}
                  activeIcon={d.activeIcon}
                  defaultIcon={d.defaultIcon}
                  title={d.title}
                  isSidebarOpen={isSideBarOpen}
                />
              </section>
            )}

            {/* // nested icons */}
            {d.nestedItems && isSideBarOpen && d.nestedItems.length > 0 && (
              <section className="px-4 w-full border-t border-zinc-600 mt-4 pt-4">
                <p className="px-3 mb-2">{d.sectionTitle}</p>
                {d.nestedItems.map((n, i) => (
                  <SidebarItem
                    path={n.path}
                    activeIcon={n.activeIcon}
                    defaultIcon={n.defaultIcon}
                    title={n.title}
                    isSidebarOpen={isSideBarOpen}
                    key={i}
                  />
                ))}
              </section>
            )}
          </>
        ))}

        {isSideBarOpen && (
          <section className="px-4 flex flex-col text-zinc-400 gap-3  w-full border-t border-zinc-600 mt-4 pt-4 text-sm font-semibold">
            <p>About Press Copyright Contact us Creator Advertise Developers</p>
            <p>
              Terms Privacy Policy & Safety How YouTube works
              <br />
              Test new features
            </p>
            <p className="text-xs font-normal text-zinc-600">
              © 2023 Google LLC
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default SideBar;

// type SideBarItemProps={
//   title:string | undefined,
//   defaultIcon: React.ReactNode;
//   activeIcon:React.ReactNode;
//   path?:String;
//   isSideBarOpen: boolean
// }

const SidebarItem = (props) => {
  const pathName = usePathname;
  return (
    <Link href={`${props.path}`}>
      <HoverDiv
        isActive={pathName === props.path}
        className={cn("w-full flex items-center gap-5", {
          "flex-col gap-2": !props.isSidebarOpen,
        })}
      >
        {/* Icon */}
        <section className="text-2xl h-7 w-7 flex items-center">
          {props.path === pathName ? props.activeIcon : props.defaultIcon}
        </section>
        {/* Text */}
        <p
          className={cn("text-sm font-semibold", {
            "text-[10px]": !props.isSidebarOpen,
          })}
        >
          {props.title}
        </p>
      </HoverDiv>
    </Link>
  );
};
