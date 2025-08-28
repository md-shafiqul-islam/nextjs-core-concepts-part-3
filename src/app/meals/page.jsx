import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",
  description: "Loading Meals from MealDB api using Server Component",
};

export default async function MealsPage() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await res.json();

  const meals = data.meals;

  return (
    <div className="grid grid-cols-3 gap-5">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className={`border border-purple-500 ${inter.className}`}
        >
          <h1>Meal Name: {meal.strMeal}</h1>

          {meal.strMealThumb ? (
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={500}
              height={500}
            />
          ) : (
            <p>No image available</p> // or fallback placeholder
          )}

          <p>Meal Category: {meal.strCategory}</p>
          <p>Meal Instructions: {meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}
