import { useCallback, useEffect, useState } from "react";

const Hero = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    // Array of carousel images with titles, subtitles, and button text
    const carouselSlides = [
        {
            image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Discover New Horizons',
            subtitle: 'Explore the beauty of nature with our exclusive tours.',
            button1Text: 'See More',
            button2Text: 'Book Now',
        },
        {
            image: 'https://images.pexels.com/photos/7031833/pexels-photo-7031833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Adventure Awaits',
            subtitle: 'Experience the thrill of a lifetime.',
            button1Text: 'See More',
            button2Text: 'Book Now',
        },
        // Add more slides as needed
    ];

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? carouselSlides.length - 1 : currentSlider - 1
        );

    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) =>
            currentSlider === carouselSlides.length - 1 ? 0 : currentSlider + 1
        );
    }, [carouselSlides.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 6000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div>
            <div className="h-80 w-full md:h-[470px] lg:h-[640px] relative overflow-hidden">
                {/* Arrow left */}
                <button
                    onClick={prevSlider}
                    className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                    <svg
                        className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                {/* Arrow right */}
                <button
                    onClick={nextSlider}
                    className="absolute top-1/2 z-50 right-3 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                    <svg
                        className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(180)"
                    >
                        <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                    </svg>
                </button>
                {/* Dots */}
                <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                    {carouselSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlider(idx)}
                            className={`rounded-full duration-3000 bg-white ${currentSlider === idx ? "w-8" : "w-2"
                                } h-2`}
                        ></button>
                    ))}
                </div>
                {/* Carousel container */}
                <div
                    className="ease-linear duration-500 flex transform-gpu"
                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}
                >
                    {/* Sliders with Titles, Subtitles, and Buttons */}
                    {carouselSlides.map((slide, idx) => (
                        <div
                            key={slide.image}
                            className="min-w-full h-80 sm:h-96 md:h-[540px] lg:h-[650px] relative"
                        >
                            <img
                                src={slide.image}
                                className="w-full h-full object-cover"
                                alt={`Slide ${idx + 1}`}
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-sm md:text-lg mb-4">
                                    {slide.subtitle}
                                </p>
                                <div className="flex gap-2">
                                    <button className="bg-slate-700/20 border-2 border-whiite font-bold font-ubuntu hover:bg-Primary text-white py-2 px-4 rounded">
                                        {slide.button1Text}
                                    </button>
                                    <button className="bg-Primary font-bold font-ubuntu hover:bg-amber-400 text-white py-2 px-4 rounded">
                                        {slide.button2Text}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
