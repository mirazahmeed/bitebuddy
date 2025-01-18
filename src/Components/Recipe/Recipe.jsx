import React from "react";
import { MdAccessTime } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
import PropTypes from "prop-types";

const Recipe = ({ card, addForCook }) => {
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
                <div className="card lg:p-7 bg-base-100 shadow-xl border">
                    <figure>
                        <img
                            src={recipe_image}
                            className="rounded-xl bg-cover bg-center p-6 h-56 "
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">
                            {recipe_name}
                        </h2>
                        <p className="text-gray-600">{short_description}</p>
                        <div className="mt-4">
                            <h3 className="font-semibold">Ingredients: 6</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-4">
                            <span className="flex items-center gap-1">
                                <MdAccessTime className="text-base" />
                                {preparing_time} minutes
                            </span>
                            <span className="flex items-center gap-1">
                                <RiFireLine className="text-base" />
                                {calories} calories
                            </span>
                        </div>
                        <div className="card-actions justify-center mt-4">
                            <button onClick={()=>addForCook(card)} className="btn hover:text-white bg-[#35f3a3] w-full">
                                Want to Cook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


Recipe.propTypes = {
    card: PropTypes.object.isRequired,
    addForCook: PropTypes.func.isRequired,
    
};

export default Recipe;
