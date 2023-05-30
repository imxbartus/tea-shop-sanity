import "../globals.css";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context/StateContext";

export const metadata = {
  title: "Tea Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-my-bg" suppressHydrationWarning={true}>
        <ShoppingCartProvider>
          <Navbar />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
