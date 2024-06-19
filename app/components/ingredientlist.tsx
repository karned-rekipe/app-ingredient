// components/IngredientList.tsx
"use client";
import { useState, useEffect } from 'react';
import styles from '@/app/ui/home.module.css';
import IngredientItem from './ingredientItem';
import AddIngredientForm from './addIngredientForm';



interface Ingredient {
  _id: string;
  label: string;
  start: string | null;
  end: string | null;
  status: string | null;
}

const IngredientList: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [editingIngredient, setEditingIngredient] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const editIngredient = (ingredient: Ingredient) => {
    setEditingIngredient(ingredient);
  };

  const deleteIngredient = (id: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient._id !== id)
    );
  };

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('http://localhost:8001/ingredient/');
        console.log(response, 'response')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Ingredient[] = await response.json();
        setIngredients(data);
        console.log(ingredients)
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchIngredients();

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error} 
    <p>ca n'a pas fonctionné</p>
    </div>;
  }
  
 
  
  return (
    <div className="w-full">
		
       <ul role="list" className="divide-y divide-gray-100">
      {ingredients.map((ingredient) => (
        <li key={ingredient._id} className="flex justify-between gap-x-6 py-5 ">
          <div className="flex min-w-0 gap-x-4">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{ingredient.label}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ingredient._id}</p>
            <p className="text-sm leading-6 text-gray-900">{ingredient.status}</p>
            {ingredient.start ? (
              <div>

              <p className="text-xs leading-5 text-gray-500">sans objet</p>
              </div>
            ) : (
              <div>

                <p className="text-xs leading-5 text-gray-500">sans objet</p>
              </div>

            )}
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            {ingredient.start ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                modifié le <time dateTime={ingredient.start}>{ingredient.start}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                </div>
                <p className="text-xs leading-5 text-gray-500">{ingredient.start}</p>
                <IngredientItem ingredient={ingredient} onDeleteIngredient={deleteIngredient} onEditIngredient={editIngredient}/>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    
		</div>
    
  );
};

export default IngredientList;
