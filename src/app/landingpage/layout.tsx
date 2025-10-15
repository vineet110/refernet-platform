import Header from "./Header";
import Footer from "./Footer";
//import "../globals.css"; // optional if you want to include global styles

export const metadata = {
  title: " referNet : Exploring",
  description: "Exploring more about the referNet",
};

// Layouts are Server Components by default
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="font-sans">
        <Header /> {/* ✅ Common header for all landingpage routes */}
        <main className="p-4">{children}</main>{" "}
        {/* ✅ Each page’s content renders here */}
        <Footer/>
      </div>
  );
}
