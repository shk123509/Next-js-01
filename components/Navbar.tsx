"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                 
                <MenuItem setActive={setActive} active={active} item="Our course">
                
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/Webcourse">Web Development</HoveredLink>
                  <HoveredLink href="/Interfacecourse">Interface Design</HoveredLink>
                  <HoveredLink href="/Searchcourse">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/course">Branding</HoveredLink>
          </div>
                </MenuItem>
                 <Link href="/Contact">
                    <MenuItem setActive={setActive} active={active} item="Contact Us" />
                </Link>

                <Link href="/about">
                    <MenuItem setActive={setActive} active={active} item="About Us" />
                </Link>
                <Link href="/desboards">
                    <MenuItem setActive={setActive} active={active} item="Dashbord" />
                </Link>
                
            </Menu>
        </div>
    );
}

export default Navbar;
