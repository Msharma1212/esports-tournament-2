import { Header, Footer } from "@/components/layout";
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
