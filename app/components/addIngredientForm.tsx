// components/AddIngredientForm.tsx

"use client";

import { useState } from 'react';

const AddIngredientForm: React.FC = () => {
  const [label, setLabel] = useState('');
//   const [start, setStart] = useState('');
//   const [end, setEnd] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const ingredient = { label }; // start? end 

    try {
      const res = await fetch('http://localhost:8001/ingredient/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient),
      });

      if (res.ok) {
        const newIngredient = await res.json();
        console.log('Ingrédient ajouté:', newIngredient);
        // Réinitialiser le formulaire
        setLabel('');
       
      } else {
        console.error('Erreur lors de l\'ajout de l\'ingrédient');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Label:</label>
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
      </div>
      {/* <div>
        <label>Start:</label>
        <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)}  />
      </div>
      <div>
        <label>End:</label>
        <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)}  />
      </div> */}
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddIngredientForm;
