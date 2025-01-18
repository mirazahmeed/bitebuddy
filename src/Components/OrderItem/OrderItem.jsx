import React from "react";

const OrderItem = ({ order, index, setForCooking }) => {
    const { recipe_name, preparing_time, calories } = order;
    return (
        <tr>
            <td>{index}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                <button
                    onClick={() => setForCooking(order)}
                    className="badge badge-success text-white p-2"
                >
                    Preparing
                </button>
            </td>
        </tr>
    );
};

export default OrderItem;
