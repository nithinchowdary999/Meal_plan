import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MealPlan from './MealPlan';
import WorkoutPlan from './WorkoutPlan';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Meal Plan
              </Link>
            </li>
            <li>
              <Link to="/workout" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Workout Plan
              </Link>
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