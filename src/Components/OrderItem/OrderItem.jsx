import React from "react";
import PropTypes from "prop-types";

const OrderItem = ({
    order,
    index,
    setForCooking,
    calculateCookingTime,
    calculateTotalCalories,
}) => {
    const { recipe_name, preparing_time, calories } = order;
    return (
        <tr>
            <td>{index}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                <button
                    onClick={() => {
                        setForCooking(order);
                        calculateCookingTime(preparing_time);
                        calculateTotalCalories(calories);
                    }}
                    className="badge badge-success text-white p-2"
                >
                    Preparing
                </button>
            </td>
        </tr>
    );
};

OrderItem.propTypes = {
    order: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    setForCooking: PropTypes.func.isRequired,
    calculateCookingTime: PropTypes.func.isRequired,
};

export default OrderItem;
