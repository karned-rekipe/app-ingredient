// components/AddIngredientForm.tsx

"use client";

import { useState } from 'react';

interface AddIngredientFormProps {
	onAddIngredient: (ingredient: { _id: number; label: string }) => void;
}

const AddIngredientForm: React.FC<AddIngredientFormProps> = ({ onAddIngredient }) => {
	const [label, setLabel] = useState('');
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!label.trim()) return;
		const newIngredient = { _id: Date.now(), label };
		onAddIngredient(newIngredient);
		setLabel('');
	};
	
	return (
		<form onSubmit={handleSubmit}>
		<input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
		<button type="submit">Add Ingredient</button>
		</form>
	);
};

export default AddIngredientForm;
