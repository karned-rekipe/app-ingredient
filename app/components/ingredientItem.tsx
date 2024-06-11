// components/IngredientItem.tsx

"use client";

interface Ingredient {
  _id: number;
  label: string;
  start: string | null
  end: string | null
}
interface IngredientItemProps {
  ingredient: Ingredient;
  onDeleteIngredient: (id: number) => void;
  onEditIngredient: (ingredient: Ingredient) => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, onDeleteIngredient, onEditIngredient }) => {
  const handleEdit = () => {
    onEditIngredient(ingredient);
  };

  const handleDelete = () => {
    onDeleteIngredient(ingredient._id);
  };

  return (
    <li>
      {ingredient.label}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default IngredientItem;
