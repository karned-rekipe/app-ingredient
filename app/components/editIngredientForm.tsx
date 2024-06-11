// components/EditIngredientForm.tsx

"use client";

import { useState } from 'react';

interface Ingredient {
  id: number;
  name: string;
}

interface EditIngredientFormProps {
  ingredient: Ingredient;
  onUpdateIngredient: (ingredient: Ingredient) => void;
}

const EditIngredientForm: React.FC<EditIngredientFormProps> = ({ ingredient, onUpdateIngredient }) => {
  const [name, setName] = useState(ingredient.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const updatedIngredient: Ingredient = { ...ingredient, name };
    onUpdateIngredient(updatedIngredient);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditIngredientForm;
