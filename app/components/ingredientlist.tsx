// components/IngredientList.tsx
"use client";
import { useState, useEffect } from 'react';
import styles from '@/app/ui/home.module.css';
import IngredientItem from './ingredientItem';



interface Ingredient {
  _id: number;
  label: string;
  start: string | null
  end: string | null
}

const IngredientList: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('http://localhost:8001/ingredient/');
        console.log(response)
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
  const addIngredient = (ingredient: Ingredient) => {
	setIngredients([...ingredients, ingredient]);
  };

  return (
    <div >
			<ul className="">
				{ingredients.map(ingredient => (
					<li 
					className='group rounded-lg border border-black px-5 my-4'  
					key={ingredient._id}>
					<div className={styles.arrow}></div>
						{ingredient.label}
					<div >
						<button className="rounded-lg bg-blue-500 pl-2 text-white" onClick={() => onEditIngredient(ingredient)}>Edit</button>
						<button className="rounded-lg bg-red-500 pl-2 text-white" onClick={() => onDeleteIngredient(ingredient._id)}>Delete</button>
					</div>
					</li>
				))}
			</ul>
		</div>
		
  );
};

export default IngredientList;
