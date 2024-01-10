
import "./globals.css";
import { CharacterProvider } from "@/context/characterContext";
import Header from "./components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CharacterProvider>
        <body>
          <Header/>
          {children}</body>
      </CharacterProvider>
    </html>
  );
}
