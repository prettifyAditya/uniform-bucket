import Header from "@/components/Header";
import  "../app/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        {children}
      </body>
    </html>
  );
}
