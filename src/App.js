
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MealPlan from './MealPlan';
import WorkoutPlan from './WorkoutPlan';

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen text-white">
        <nav className="bg-red-700 p-4 shadow-lg">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-gray-200 font-bold text-lg transition duration-300">Meal Plan</Link>
            </li>
            <li>
              <Link to="/workout" className="text-white hover:text-gray-200 font-bold text-lg transition duration-300">Workout Plan</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MealPlan />} />
          <Route path="/workout" element={<WorkoutPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;