import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Darkó Réka Katalin CV",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
