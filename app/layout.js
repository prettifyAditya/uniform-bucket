import Header from "@/components/Header";
import  "../app/global.css"
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
