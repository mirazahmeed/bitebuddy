import React from "react";

const Preparing = () => {
    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md mx-auto border">
                    <h2 className="text-lg font-bold mb-4">
                        Want to cook: <span className="text-primary">01</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Chicken Caesar Salad</td>
                                    <td>20 minutes</td>
                                    <td>400 calories</td>
                                    <td>
                                        <span className="badge badge-success text-white p-2">
                                            Preparing
                                        </span>
                                    </td>
                                </tr>
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
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Spaghetti Bolognese</td>
                                    <td>30 minutes</td>
                                    <td>600 calories</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Spaghetti Bolognese</td>
                                    <td>30 minutes</td>
                                    <td>600 calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-between font-semibold">
                        <p>
                            Total Time ={" "}
                            <span className="text-primary">45 minutes</span>
                        </p>
                        <p>
                            Total Calories ={" "}
                            <span className="text-primary">1050 calories</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preparing;
