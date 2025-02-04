import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Nuprizm | Powering the Search for Truth",
  description: "Nuprizm uses AI to cut through the noise, uncover biases, track sentiment, and compare perspectives in news media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}