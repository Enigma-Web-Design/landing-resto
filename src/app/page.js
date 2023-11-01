import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Section position={"justify-start"} foodBack={"/food.png"} />
      <Section position={"justify-end"} foodBack={"/vip.jpg"} />
      <Footer />
    </>
  );
}
