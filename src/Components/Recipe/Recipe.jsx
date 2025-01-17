import React from "react";

const Recipe = ({ card }) => {
    const {
        recipe_image,
        recipe_id,
        recipe_name,
        short_description,
        ingredients,
        preparing_time,
        calories,
    } = card;
    return (
        <div>
            <div className="">
                <div className="card p-7 bg-base-100 shadow-xl border">
                    <figure>
                        <img
                            src={recipe_image}
                            className="rounded-xl bg-cover bg-center  h-56"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">
                            {recipe_name}
                        </h2>
                        <p className="text-gray-600">
                            Classic Italian pasta dish with savory meat sauce.
                        </p>
                        <div className="mt-4">
                            <h3 className="font-semibold">Ingredients: 6</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>500g ground beef</li>
                                <li>1 onion, chopped</li>
                                <li>2 cloves garlic, minced</li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-4">
                            <span className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6l4 2"
                                    />
                                </svg>
                                30 minutes
                            </span>
                            <span className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.75v8.25M12 15l4-4M12 15l-4-4"
                                    />
                                </svg>
                                600 calories
                            </span>
                        </div>
                        <div className="card-actions justify-center mt-4">
                            <button className="btn btn-primary w-full">
                                Want to Cook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
