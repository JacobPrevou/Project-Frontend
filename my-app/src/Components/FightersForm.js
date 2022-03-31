import React, {useState} from "react";

function FightersForm({ onAddFighter }) {
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

    function handleSubmit(e) {
        e.preventDefault();
        const fighterData = {
          id: formData.id,
          name: formData.name,
          image: formData.image,
          record: formData.record,
          division: formData.division
        };
         fetch("http://localhost:3000/fighters", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(fighterData),
         })
           .then((r) => r.json())
           .then((newFighter) => onAddFighter(newFighter));
      }

    return (
        <div className="new fighter form">
            <h2>New Fighter</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" placeholder="Fighter name" value={formData.name} onChange={handleChange} />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                <input type="text" name="record" placeholder="Wins-Losses-Draws" value={formData.record} onChange={handleChange} />
                <input type="text" name="division" placeholder="Weightclass" value={formData.division} onChange={handleChange} />
                <button type="submit">Add Fighter</button>
            </form>
        </div>
    );
}

export default FightersForm;