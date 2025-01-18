import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Preparing from "../Preparing/Preparing";
import PropTypes from "prop-types";

const Recipes = () => {
    const [cards, setCards] = useState([]);
    // console.log(cards);
    useEffect(() => {
        fetch("assets.json")
            .then((response) => response.json())
            .then((data) => setCards(data));
    }, []);

    const [cooker, setCooker] = useState([]);

    const addForCook = (order) => {
        setCooker([...cooker, order]);
    };

    const [currentlyCooking, SetCurrentlyCooking] = useState([]);

    const setForCooking = (Prepar) => {
        // SetCurrentlyCooking(Prepar);
        // setTimeout(() => {
        //     SetCurrentlyCooking(null);
        // }, 5000);
        console.log("setForCooking");
    };

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
            <div className="flex lg:flex-row md:flex-row mt-10 sm:flex-col-reverse gap-10">
                <div className="lg:w-3/5 md:w-1/2 grid lg:grid-cols-2 md:grid-cols-1 gap-10">
                    {cards.map((card, index) => (
                        <Recipe
                            key={index}
                            addForCook={addForCook}
                            card={card}
                        ></Recipe>
                    ))}
                </div>
                <div className="lg:w-2/5 md:w-1/2">
                    <Preparing
                        currentlyCooking={currentlyCooking}
                        setForCooking={setForCooking}
                        cooker={cooker}
                    ></Preparing>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {};

export default Recipes;
