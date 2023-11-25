import banner from '../../../../assets/banner-image.jpg'
import { TbShoppingCartDollar } from "react-icons/tb";
import CircularText from './circulartext';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-pink-200 via-pink-300 to-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-lg rounded-full h-full shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We Will Find A Perfect Home For You.</h1>
      <p className="py-6">Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>
      <button className="btn text-white bg-orange-400"><TbShoppingCartDollar></TbShoppingCartDollar> Rent Or Buy</button>
     
     <div>
        <CircularText></CircularText>
     </div>
      <div className="stats shadow mt-2 bg-pink-200">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Property Ready</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Happy Customer</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;