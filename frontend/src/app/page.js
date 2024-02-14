


import CategorySection from '@/components/CategorySection';
import Header from '@/components/Header';
import PopularProducts from '@/components/PopularProducts';
import Slider from '@/components/Slider';




  const  Home =  () => {

  return (
    <main className='m-10'>
      <Header />
      <Slider />
      <CategorySection />
      <PopularProducts />
    </main>
  );
}

export default Home;
