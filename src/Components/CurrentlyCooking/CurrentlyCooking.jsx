import React from "react";
import PropTypes from "prop-types";

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

CurrentlyCooking.propTypes = {
    order: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}


export default CurrentlyCooking;
