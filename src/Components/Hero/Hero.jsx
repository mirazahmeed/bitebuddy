import React from "react";

const Hero = () => {
    return (
        <div className="mt-5">
            <div
                className="hero min-h-[600px] md:w-11/12 mx-auto rounded-2xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/QQSZ4X3/Rectangle-1-3.png)",
                }}
            >
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-5/6">
                        <h1 className="mb-5 text-5xl font-bold">
                            Discover an exceptional cooking class tailored for
                            you!
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex justify-center gap-5">
                            <button className="btn bg-[#35f3a3] border-none rounded-full font-bold">
                                Explore Now
                            </button>
                            <button className="btn bg-transparent rounded-full text-white font-bold">
                                Our Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
