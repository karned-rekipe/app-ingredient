"use client" 
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { useState, useEffect } from 'react';
import IngredientList from './components/ingredientlist';
import AddIngredientForm from './components/addIngredientForm';

interface Ingredient {
	_id: number;
	label: string;
  }
const Home: React.FC = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const addIngredient = (ingredient: Ingredient) => {
		setIngredients([...ingredients, ingredient]);
	  };
  
	
	
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center
				 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
				</div>
			</div>
			
				<div className="w-full">
					<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
						<h1 className="font-mono font-bold text-4xl">INGRÉDIENTS</h1>
						<div className="group rounded-lg border border-transparent px-5 py-4
				 			transition-colors border-gray-300 bg-gray-100">
						<AddIngredientForm/>
						</div>

					</div>
					<IngredientList/>
				</div>


			<div 
			className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] 
			before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial 
			before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute 
			after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 
			after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br 
			before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 
			after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
			</div>

			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<a
				href="https://github.com/karned-rekipe/app-ingredient"
				className="group rounded-lg border border-transparent px-5 py-4
				 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				target="_blank"
				rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						app-ingredient{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
					créez, consultez, modifiez ou supprimez les ingrédients que vous utilisez
					</p>
				</a>
				<a
					href="https://github.com/karned-rekipe/api-recipe"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
					app-recipe{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
				-		&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
					créez, consultez, modifiez ou supprimez toutes vos recettes préférées
					</p>
				</a>
				<a
					href="https://www.google.com/search?q=plannifieez+vos+recettes&rlz=1C5CHFA_enFR966FR966&oq=plannifieez+vos+recettes&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gEINjY3MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						app-planning{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						-&gt;
						</span>
					</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">
					planifiez vos recettes et vos courses de la semaine
					</p>
				</a>
			</div>
</main>
);
}
export default Home;