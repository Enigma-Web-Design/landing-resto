import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Nav from "@/components/Nav";

import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Nav />
      <Grid />
      <Section position={"justify-start"} foodBack={"/food.png"} />
      <Section position={"justify-end"} foodBack={"/vip.jpg"} />
      <Footer />
    </>
  );
}
