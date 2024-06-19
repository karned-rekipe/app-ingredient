// components/EditIngredientForm.tsx

"use client";

import { useState } from 'react';

interface Ingredient {
  _id: string;
  label: string;
}

interface EditIngredientFormProps {
  ingredient: Ingredient;
  onUpdateIngredient: (ingredient: Ingredient) => void;
}

const EditIngredientForm: React.FC<EditIngredientFormProps> = ({ ingredient, onUpdateIngredient }) => {
  const [label, setLabel] = useState(ingredient.label);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!label.trim()) return;
    const updatedIngredient: Ingredient = { ...ingredient, label};
    onUpdateIngredient(updatedIngredient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
      <button type="submit">_</button>
    </form>
  );
};

export default EditIngredientForm;
