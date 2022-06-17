import React, {useState} from "react";

function FightersForm({ onAddFighter }) {
  // Initialize object
  const [formData, setFormData] = useState({
      id: 0,
      name: "",
      image: "",
      record: "",
      division: ""
  });
  
  function handleChange(e) {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  }
  //POST request  ////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/fighters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newFighter) => {
      onAddFighter(newFighter);
    });
  }



    return (
        <div className="add_fighter_form">
            <h2 className="header">Add a Fighter!</h2>
            <form className="form" onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Fighter name" value={formData.name} onChange={handleChange} />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                <input type="text" name="record" placeholder="Wins-Losses-Draws"  value={formData.record} onChange={handleChange} />
                <input type="text" name="division" placeholder="Weightclass" value={formData.division} onChange={handleChange} />
                <button id="button" type="submit">Add Fighter</button>
            </form>
        </div>
    );
}

export default FightersForm;