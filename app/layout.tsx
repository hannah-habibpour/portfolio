import "./globals.css";

import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobile-navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-svh md:overflow-hidden px-[38px] py-[22px]">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="md:hidden">
            <MobileNavbar />
          </div>
          <div className="flex-1 overflow-y-auto mt-[66px] md:mt-0">
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
