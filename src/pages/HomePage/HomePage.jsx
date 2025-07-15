import Features from "./Features/Features";
import Hero from "./Hero/Hero";


const HomePage = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <Hero />
        <Features/>
      </div>
    </>
  );
};

export default HomePage;