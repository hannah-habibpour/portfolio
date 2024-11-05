import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-svh overflow-hidden px-[38px] py-[22px]">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
