import React from "react";
import OrderItem from "../OrderItem/OrderItem";

const Preparing = ({ cooker, setForCooking }) => {
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
                        <span className="text-primary">02</span>
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
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preparing;
