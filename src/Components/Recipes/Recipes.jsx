import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Preparing from "../Preparing/Preparing";

const Recipes = ({ card }) => {
    const [cards, setCards] = useState([]);
    console.log(cards);
    useEffect(() => {
        fetch("assets.json")
            .then((response) => response.json())
            .then((data) => setCards(data));
    }, []);

    return (
            <div className="mt-20">
                <div className="flex flex-col text-center space-y-5 w-2/4 mx-auto">
                    <h2 className="text-5xl font-bold">Our Recipes</h2>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur. Proin et feugiat
                        senectus vulputate netus pharetra rhoncus. Eget urna
                        volutpat curabitur elementum mauris aenean neque.
                    </p>
                </div>
                <div className="flex mt-10 gap-10">
                    <div className="w-3/5 grid grid-cols-2 gap-10">
                        {cards.map((card, index) => (
                            <Recipe key={index} card={card}></Recipe>
                        ))}
                    </div>
                    <div className="w-2/5">
                        <Preparing></Preparing>
                    </div>
                </div>
            </div>
    );
};

export default Recipes;
