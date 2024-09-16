import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const fixedMeals = [
  {
    name: "Morning Start",
    color: "#E6F3FF",
    items: [
      {
        name: "Lime Water",
        amount: "1 glass",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
      {
        name: "Protein Shake",
        amount: "1 scoop",
        calories: 120,
        protein: 25,
        carbs: 3,
        fat: 1.5,
      },
    ],
  },
  {
    name: "Afternoon Snack",
    color: "#FFF0E6",
    items: [
      {
        name: "Almonds",
        amount: "10 pieces",
        calories: 70,
        protein: 2.5,
        carbs: 2.5,
        fat: 6,
      },
    ],
  },
  {
    name: "Pre-workout",
    color: "#E6FFFF",
    items: [
      {
        name: "Banana",
        amount: "1 medium",
        calories: 105,
        protein: 1,
        carbs: 27,
        fat: 0.5,
      },
    ],
  },
  {
    name: "Post-workout",
    color: "#FFE6E6",
    items: [
      {
        name: "Protein Shake",
        amount: "1 scoop",
        calories: 120,
        protein: 25,
        carbs: 3,
        fat: 1.5,
      },
      {
        name: "Creatine",
        amount: "5g",
        calories: 20,
        protein: 0,
        carbs: 0,
        fat: 0,
      },
    ],
  },
];

const lunchOptions = [
  {
    name: "Chicken Lunch",
    color: "#E6FFE6",
    items: [
      {
        name: "Rice",
        amount: "200g",
        calories: 260,
        protein: 5.3,
        carbs: 57.3,
        fat: 0.7,
      },
      {
        name: "Raw chicken",
        amount: "200g",
        calories: 220,
        protein: 46,
        carbs: 0,
        fat: 5,
      },
      {
        name: "Carrots",
        amount: "150g",
        calories: 60,
        protein: 1,
        carbs: 14,
        fat: 0,
      },
      {
        name: "Olive oil",
        amount: "10ml",
        calories: 80,
        protein: 0,
        carbs: 0,
        fat: 10,
      },
    ],
  },
  {
    name: "Paneer Lunch",
    color: "#FFFFE6",
    items: [
      {
        name: "Rice",
        amount: "200g",
        calories: 260,
        protein: 5.3,
        carbs: 57.3,
        fat: 0.7,
      },
      {
        name: "Paneer",
        amount: "100g",
        calories: 265,
        protein: 18.3,
        carbs: 1.2,
        fat: 20.8,
      },
      {
        name: "Carrots",
        amount: "150g",
        calories: 60,
        protein: 1,
        carbs: 14,
        fat: 0,
      },
      {
        name: "Olive oil",
        amount: "10ml",
        calories: 80,
        protein: 0,
        carbs: 0,
        fat: 10,
      },
    ],
  },
  {
    name: "Soya Chunks Lunch",
    color: "#E6FFE6",
    items: [
      {
        name: "Rice",
        amount: "200g",
        calories: 260,
        protein: 5.3,
        carbs: 57.3,
        fat: 0.7,
      },
      {
        name: "Soya chunks",
        amount: "100g",
        calories: 345,
        protein: 52,
        carbs: 33,
        fat: 0.5,
      },
      {
        name: "Carrots",
        amount: "150g",
        calories: 60,
        protein: 1,
        carbs: 14,
        fat: 0,
      },
      {
        name: "Olive oil",
        amount: "10ml",
        calories: 80,
        protein: 0,
        carbs: 0,
        fat: 10,
      },
    ],
  },
];

const dinnerOptions = [
  {
    name: "Balanced Protein Dinner",
    color: "#FFE6FF",
    items: [
      {
        name: "Eggs",
        amount: "3",
        calories: 210,
        protein: 18,
        carbs: 0,
        fat: 15,
      },
      {
        name: "Olive oil",
        amount: "10ml",
        calories: 80,
        protein: 0,
        carbs: 0,
        fat: 10,
      },
      {
        name: "Milk",
        amount: "200ml",
        calories: 120,
        protein: 6,
        carbs: 10,
        fat: 7,
      },
      {
        name: "Cucumber",
        amount: "150g",
        calories: 25,
        protein: 1,
        carbs: 5,
        fat: 0,
      },
      {
        name: "Oats/honey bunches",
        amount: "30g",
        calories: 130,
        protein: 3,
        carbs: 25,
        fat: 2,
      },
    ],
  },
  {
    name: "Bread with Spreads",
    color: "#F0E6FF",
    items: [
      {
        name: "Whole wheat bread",
        amount: "4 slices",
        calories: 280,
        protein: 16,
        carbs: 52,
        fat: 4,
      },
      {
        name: "Guacamole",
        amount: "2 tbsp",
        calories: 60,
        protein: 1,
        carbs: 4,
        fat: 5,
      },
      {
        name: "Richard's Peanut Butter",
        amount: "1 tbsp",
        calories: 95,
        protein: 4,
        carbs: 3,
        fat: 8,
      },
      {
        name: "Cucumber",
        amount: "150g",
        calories: 25,
        protein: 1,
        carbs: 5,
        fat: 0,
      },
      {
        name: "Eggs",
        amount: "3",
        calories: 210,
        protein: 18,
        carbs: 0,
        fat: 15,
      },
    ],
  },
];

const lowCalorieOptions = [
  {
    name: "Watermelon",
    amount: "150g",
    calories: 45,
    protein: 1,
    carbs: 11,
    fat: 0,
  },
  {
    name: "Sweet potato",
    amount: "100g",
    calories: 90,
    protein: 2,
    carbs: 21,
    fat: 0,
  },
  {
    name: "Papaya",
    amount: "150g",
    calories: 60,
    protein: 1,
    carbs: 15,
    fat: 0,
  },
  {
    name: "Orange",
    amount: "150g",
    calories: 70,
    protein: 1,
    carbs: 18,
    fat: 0,
  },
  {
    name: "Grapes",
    amount: "150g",
    calories: 104,
    protein: 1,
    carbs: 27,
    fat: 0,
  },
];

const MealCard = ({ meal }) => (
  <Card className="mb-4" style={{ backgroundColor: meal.color }}>
    <CardHeader className="font-bold">{meal.name}</CardHeader>
    <CardContent>
      {meal.items.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>
            {item.name} ({item.amount})
          </span>
          <span>{item.calories} cal</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

const MacrosPieChart = ({ macros }) => {
  const data = [
    { name: "Protein", value: macros.protein },
    { name: "Carbs", value: macros.carbs },
    { name: "Fat", value: macros.fat },
  ];
  const COLORS = ["#FF6B6B", "#4ECDC4", "#FFA500"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const MealPlan = () => {
  const [selectedLunch, setSelectedLunch] = useState(lunchOptions[0]);
  const [selectedDinner, setSelectedDinner] = useState(dinnerOptions[0]);
  const [selectedLowCalorie, setSelectedLowCalorie] = useState(
    lowCalorieOptions[0]
  );

  const calculateTotals = () => {
    let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
    fixedMeals.concat([selectedLunch, selectedDinner]).forEach((meal) => {
      meal.items.forEach((item) => {
        totals.calories += item.calories;
        totals.protein += item.protein;
        totals.carbs += item.carbs;
        totals.fat += item.fat;
      });
    });
    totals.calories += selectedLowCalorie.calories;
    totals.protein += selectedLowCalorie.protein;
    totals.carbs += selectedLowCalorie.carbs;
    totals.fat += selectedLowCalorie.fat;
    return totals;
  };

  const totals = calculateTotals();

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">
        Nithin's Meal Plan
      </h1>
      <Tabs defaultValue="meals" className="bg-white rounded-lg shadow-md p-4">
        <TabsList className="mb-4">
          <TabsTrigger value="meals" className="px-4 py-2 text-indigo-600">
            Meals
          </TabsTrigger>
          <TabsTrigger value="macros" className="px-4 py-2 text-indigo-600">
            Macros
          </TabsTrigger>
        </TabsList>
        <TabsContent value="meals">
          {fixedMeals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
          <Card
            className="mb-4"
            style={{ backgroundColor: selectedLunch.color }}
          >
            <CardHeader className="font-bold">Lunch Options</CardHeader>
            <CardContent>
              <Select
                onValueChange={(value) =>
                  setSelectedLunch(lunchOptions[parseInt(value)])
                }
                value={lunchOptions
                  .findIndex((option) => option.name === selectedLunch.name)
                  .toString()}
              >
                {lunchOptions.map((option, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {option.name}
                  </SelectItem>
                ))}
              </Select>
              <MealCard meal={selectedLunch} />
            </CardContent>
          </Card>
          <Card
            className="mb-4"
            style={{ backgroundColor: selectedDinner.color }}
          >
            <CardHeader className="font-bold">Dinner Options</CardHeader>
            <CardContent>
              <Select
                onValueChange={(value) =>
                  setSelectedDinner(dinnerOptions[parseInt(value)])
                }
                value={dinnerOptions
                  .findIndex((option) => option.name === selectedDinner.name)
                  .toString()}
              >
                {dinnerOptions.map((option, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {option.name}
                  </SelectItem>
                ))}
              </Select>
              <MealCard meal={selectedDinner} />
            </CardContent>
          </Card>
          <Card className="mb-4 bg-gradient-to-r from-green-100 to-blue-100">
            <CardHeader className="font-bold">
              Additional Low-Calorie Snack
            </CardHeader>
            <CardContent>
              <Select
                onValueChange={(value) =>
                  setSelectedLowCalorie(lowCalorieOptions[parseInt(value)])
                }
                value={lowCalorieOptions
                  .findIndex(
                    (option) => option.name === selectedLowCalorie.name
                  )
                  .toString()}
              >
                {lowCalorieOptions.map((option, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {option.name}
                  </SelectItem>
                ))}
              </Select>
              <div className="mt-2">
                <span>
                  {selectedLowCalorie.name} ({selectedLowCalorie.amount}):{" "}
                  {selectedLowCalorie.calories} cal
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-yellow-100 to-red-100">
            <CardHeader className="font-bold">Daily Totals</CardHeader>
            <CardContent>
              <div>Calories: {totals.calories}</div>
              <div>Protein: {totals.protein.toFixed(1)}g</div>
              <div>Carbs: {totals.carbs.toFixed(1)}g</div>
              <div>Fat: {totals.fat.toFixed(1)}g</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="macros">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
            <CardHeader className="font-bold">
              Macronutrient Breakdown
            </CardHeader>
            <CardContent>
              <MacrosPieChart macros={totals} />
              <div className="mt-4">
                <div>
                  Protein: {totals.protein.toFixed(1)}g (
                  {(((totals.protein * 4) / totals.calories) * 100).toFixed(1)}
                  %)
                </div>
                <div>
                  Carbs: {totals.carbs.toFixed(1)}g (
                  {(((totals.carbs * 4) / totals.calories) * 100).toFixed(1)}%)
                </div>
                <div>
                  Fat: {totals.fat.toFixed(1)}g (
                  {(((totals.fat * 9) / totals.calories) * 100).toFixed(1)}%)
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default MealPlan;
