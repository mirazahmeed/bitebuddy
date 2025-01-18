import React from "react";

const CurrentlyCooking = ({order, index}) => {
    const { recipe_name, preparing_time, calories } = order;
    return (
        <tr>
            <td>{index}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    );
};


export default CurrentlyCooking;
