import Article from '@/components/Article';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import ArticleOwner from '@/components/ArticleOwner';

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Article/>
      <Grid /> 
      <ArticleOwner foodBack={'/owner.png'} />
      <Section position={'justify-end bg-center'} foodBack={'/food.png'} />
      <Section position={'justify-start'} foodBack={'/vip.jpg'} />
      <Footer />
    </>
  );
}
