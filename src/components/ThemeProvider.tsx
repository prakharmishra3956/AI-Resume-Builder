// "use client";

// import { useState, useEffect } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu"; // your shadcn wrapper
// import { Button } from "@/components/ui/button";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function ThemeToggle() {
//   const { theme, setTheme, systemTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // Wait until mounted to avoid SSR mismatch
//   useEffect(() => setMounted(true), []);

//   if (!mounted) return null;

//   const currentTheme = theme === "system" ? systemTheme : theme;

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon">
//           <Sun
//             className={`h-[1.2rem] w-[1.2rem] transition-all ${
//               currentTheme === "dark"
//                 ? "rotate-90 scale-0"
//                 : "rotate-0 scale-100"
//             }`}
//           />
//           <Moon
//             className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
//               currentTheme === "dark"
//                 ? "rotate-0 scale-100"
//                 : "-rotate-90 scale-0"
//             }`}
//           />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// src/components/ThemeProvider.tsx
"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { PropsWithChildren } from "react";

export default function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
