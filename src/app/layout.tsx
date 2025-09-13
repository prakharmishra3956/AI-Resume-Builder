
// import { ClerkProvider } from "@clerk/nextjs";
// import type { Metadata } from "next";
// import ThemeProvider from "@/components/ThemeProvider";
// import "./globals.css";
// import { Toaster } from "sonner";

// export const metadata: Metadata = {
//   title: {
//     template: "%s - AI Resume Builder",
//     absolute: "AI Resume Builder",
//   },
//   description:
//     "AI Resume Builder is the easiest way to create a professional resume that will help you land your dream job.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="light"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//             <Toaster/>
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: { template: "%s - AI Resume Builder", absolute: "AI Resume Builder" },
  description:
    "AI Resume Builder is the easiest way to create a professional resume that will help you land your dream job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
