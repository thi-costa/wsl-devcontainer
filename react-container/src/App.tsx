import React, { useState } from "react";

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

const App: React.FC = () => {
    const [filter, setFilter] = useState("");

    const filteredFruits = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Fruits List</h1>
            <input
                type="text"
                placeholder="Search fruits"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
