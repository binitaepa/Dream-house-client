
import  { useEffect,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
       <div className="mx-auto text-center md:w-4/12 my-8">
           
           <h3 className="text-3xl text-orange-400 uppercase border-y-4 py-4">Reviews</h3>
       </div>

       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                           <img src={review.reviewerImage} alt="" />
                            <p className="py-8">{review.reviewDescription}</p>
                            <h3 className="text-2xl text-orange-400">{review.reviewerName}</h3>
                            <h2>{review.propertyTitle}</h2>
                        </div>
                    </SwiperSlide>)
                }
      </Swiper>
    </section>
    );
};

export default Review;