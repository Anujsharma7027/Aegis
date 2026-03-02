import "@/index.css";
import { Providers } from "@/components/layout/Providers";

export const metadata = {
  title: "Aegis",
  description: "Aegis dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
