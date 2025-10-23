import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from '../../assets/img_1.jpg'
import img2 from '../../assets/img_2.jpg'
import img3 from '../../assets/img_3.jpg'
import img4 from '../../assets/img_4.jpg'
import img5 from '../../assets/img_5.jpg'

const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden mb-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={img1}
                        alt="Colorful Toys"
                        className="w-full h-auto object-fill"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={img2}
                        alt="Toy Airplane"
                        className="w-full h-auto object-fill"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={img3}
                        alt="Lego Bricks"
                        className="w-full h-auto object-fill"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={img4}
                        alt="Lego Bricks"
                        className="w-full h-auto object-fill"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={img5}
                        alt="Lego Bricks"
                        className="w-full h-auto object-fill"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
