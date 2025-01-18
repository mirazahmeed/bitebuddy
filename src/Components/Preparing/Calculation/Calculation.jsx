import React from "react";

const Calculation = ({ cookingTime, totalCalories }) => {
    return (
        <div>
            <div className="mt-6 flex justify-between font-semibold">
                <p>
                    Total Time = {cookingTime}
                    <span className="text-primary"> minutes</span>
                </p>
                <p>
                    Total Calories ={totalCalories}
                    <span className="text-primary"> calories</span>
                </p>
            </div>
        </div>
    );
};

export default Calculation;
