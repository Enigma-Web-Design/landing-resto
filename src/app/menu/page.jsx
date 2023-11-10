import Footer from '@/components/Footer';
import MenuBody from '@/components/MenuBody';
import Nav from '@/components/Nav';
export default function Menu() {
  return (
    <>
      <Nav />
      <MenuBody image={'/menu1.png'}/>
      <MenuBody image={'/menu2.png'}/>
      <MenuBody image={'/menu3.png'}/>
      <Footer />
    </>
  );
}
