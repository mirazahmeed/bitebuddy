import React, { useState } from "react";
import OrderItem from "../OrderItem/OrderItem";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import PropTypes from "prop-types";
import Calculation from "../Calculation/Calculation";
import "./Preparing.css";

const Preparing = ({ cooker }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const setForCooking = (cooking) => {
        setCurrentlyCooking((prev) => [...prev, cooking]); // Add to currentlyCooking state
    };

    const [cookingTime, setCookingTime] = useState(0);

    const calculateCookingTime = (time, recipe_id) => {
        setCookingTime(cookingTime + time);
        // console.log("Cooking time");
        
    };

    const [totalCalories, setTotalCalories] = useState(0);
    const calculateTotalCalories = (calories, recipe_id) => {
        setTotalCalories(totalCalories + calories);
        // console.log("Total calories");
    };

    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md mx-auto border">
                    <h2 className="text-lg font-bold mb-4">
                        Want to cook:{" "}
                        <span className="text-primary">{cooker.length}</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cooker.map((order, index) => (
                                    <OrderItem
                                        calculateCookingTime={
                                            calculateCookingTime
                                        }
                                        calculateTotalCalories={
                                            calculateTotalCalories
                                        }
                                        setForCooking={setForCooking}
                                        key={order.recipe_id}
                                        index={index + 1}
                                        order={order}
                                    ></OrderItem>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="text-lg font-bold mt-8 mb-4">
                        Currently cooking:{" "}
                        <span className="text-primary">
                            {currentlyCooking.length}
                        </span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentlyCooking.map((order, index) => (
                                    <CurrentlyCooking
                                        key={order.recipe_id}
                                        index={index + 1}
                                        order={order}
                                    />
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                    <div>
                        <Calculation cookingTime={cookingTime} totalCalories={totalCalories}></Calculation>
                    </div>
                </div>
            </div>
        </div>
    );
};

Preparing.propTypes = {
    cooker: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Preparing;
