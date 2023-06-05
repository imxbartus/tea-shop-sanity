import "../globals.css";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context/StateContext";
import { UserPanelContextProvider } from "../context/UserPanelContext";

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
      <body className="bg-my-bg">
        <UserPanelContextProvider>
          <ShoppingCartProvider>
            <Navbar />
            {children}
          </ShoppingCartProvider>
        </UserPanelContextProvider>
      </body>
    </html>
  );
}
