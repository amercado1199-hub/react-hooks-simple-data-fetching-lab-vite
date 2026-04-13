// create your App component here
import React, { useState, useEffect } from "react";

function App() {
const [dogImage, setDogImage] = useState("");
const [loading, setLoading] = useState(true);

function fetchDog() {
setLoading(true);

fetch("https://dog.ceo/api/breeds/image/random")
.then((res) => res.json())
.then((data) => {
setDogImage(data.message);
setLoading(false);
})
.catch(() => {
setLoading(false);
});
}

useEffect(() => {
fetchDog();
}, []);

return (
<div>
<h1>Random Dog 🐶</h1>

{loading ? (
<p>Loading...</p>
) : (
<img src={dogImage} alt="Random Dog" width="300" />
)}

<button onClick={fetchDog}>Get a New Dog</button>
</div>
);
}

export default App;
