import About from "./About/About";
import Favorite from "./Favorite/Favorite";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";


const HomePage = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <Hero />
        <Features/>
        <Services/>
      </div>
      <About/>
      <div className='max-w-[1200px] mx-auto px-6'>
        {/* <Products /> */}
        <Favorite />
        {/* {adsItems?.length > 0 && <Advertisement adsItems={adsItems} />} */}
        <Testimonial />
      </div>
    </>
  );
};

export default HomePage;