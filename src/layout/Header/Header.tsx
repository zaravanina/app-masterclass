"use client";

import Anchor from "@/components/Anchor/Anchor";
import SettingsData from "@/models/settings.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(settings: SettingsData[]) {
  const menuItems = settings?.[0]?.properties?.headerLinks?.items || [];
  const pathname = usePathname();

  return (
    <nav className="font-sans px-8 sm:px-20 py-6 sm:py-10">
      <ul className="flex gap-6">
        <li>
          <Link
            className={
              pathname === "/"
                ? "underline"
                : "flex items-center no-underline hover:underline focus:underline"
            }
            href="/"
          >
            Home
          </Link>
        </li>
        {menuItems.map((item) => {
          const link = item.content.properties.link;
          return (
            link && (
              <li
                key={item.content.id}
                className={pathname === link.route.path ? "underline" : ""}
              >
                <Anchor {...link}>
                  {item.content.properties.label ?? link?.name ?? "Menu Item"}
                </Anchor>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
}
