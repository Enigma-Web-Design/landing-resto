import Nav from '@/components/Nav';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Nav />
      <Section position={'justify-start'} foodBack={'/food.png'}/>
      <Section position={'justify-end'} foodBack={'/vip.jpg'}/>
    </>
  );
}
