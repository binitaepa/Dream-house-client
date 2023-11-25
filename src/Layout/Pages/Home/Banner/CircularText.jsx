

import './circulartext.css'
const CircularText = () => {
    const texts = ['Dream', 'Real ', 'Estate']; 
    return (
        <div className="circular-text-container w-1/2">
      {texts.map((text, index) => (
        <div key={index} className="circular-text">
          {text}
        </div>
      ))}
    </div>
   
    );
};

export default CircularText;