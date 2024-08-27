import React, { useState } from "react"
function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName("XhuyZ");
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const status = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set age</button>
            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={status}>status?</button>
        </div>
    );
}
export default MyComponent