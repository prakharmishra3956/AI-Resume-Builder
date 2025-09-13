// "use client";

// import logo from "@/assets/logores.png";
// import {ThemeToggle} from "@/components/theme-toggle";
// import { UserButton } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
// import { CreditCard } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const { theme } = useTheme();

//   return (
//     <header className="shadow-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
//         <Link href="/resumes" className="flex items-center gap-2">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={35}
//             height={35}
//             className="rounded-full"
//           />
//           <span className="text-xl font-bold tracking-tight">
//             AI Resume Builder
//           </span>
//         </Link>
//         <div className="flex items-center gap-3">
//           <ThemeToggle />
//           <UserButton
//             appearance={{
//               baseTheme: theme === "dark" ? dark : undefined,
//               elements: {
//                 avatarBox: {
//                   width: 35,
//                   height: 35,
//                 },
//               },
//             }}
//           >
//             <UserButton.MenuItems>
//               <UserButton.Link
//                 label="Billing"
//                 labelIcon={<CreditCard className="size-4" />}
//                 href="/billing"
//               />
//             </UserButton.MenuItems>
//           </UserButton>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import logo from "@/assets/logores.png";
import ThemeToggle from "@/components/ThemeToggle"; // <-- default import (make sure ThemeToggle.tsx uses "export default")
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        {/* Logo + Brand */}
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            AI Resume Builder
          </span>
        </Link>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Billing Link */}
          <Link href="/billing">
            <Button variant="ghost" size="icon">
              <CreditCard className="size-4" />
              <span className="sr-only">Billing</span>
            </Button>
          </Link>

          {/* Clerk UserButton */}
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: { width: 35, height: 35 },
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
