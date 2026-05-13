import "./globals.css";

export const metadata = {
  title: "Amrit Food",
  description: "Premium dairy innovation and food manufacturing in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
