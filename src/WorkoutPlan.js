import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Select, SelectItem } from './components/ui/select';
import { FaDumbbell, FaRunning, FaYoutube } from 'react-icons/fa';
const workoutData = {
    day1: {
      title: "Day 1 (Chest and Triceps)",
      warmup: {
        name: "Basic Warmup and Stretching",
        duration: "5 mins",
        videoLink: "https://www.youtube.com/watch?v=RHplaSPTM0A"
      },
      exercises: [
        { name: "Pushups", sets: 1, reps: "10 to 12", rest: "-", videoLink: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
        { name: "Incline Bench Press", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=SrqOu55lrYU&t=1s" },
        { name: "Flat Bench Press", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=rT7DgCr-3pg&t=2s" },
        { name: "Cable Cross Over", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=Iwe6AmxVf7o&t=2s" },
        { name: "Cable Bent over Extension", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=gevFKmkqLGk" },
        { name: "Cable or V grip Pushdown", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=GCa8Q4e7laU" },
        { name: "Tricep Dips", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=c3ZGl4pAwZ4&t=26s" },
        { name: "Abs Crunches (Super Set)", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=Xyd_fa5zoEU&t=2s" },
        { name: "Leg raises (Super Set)", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=l4kQd9eWclE&t=6s" },
        { name: "Mountain Climbers", sets: 4, reps: "25 to 30 reps each side", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=nmwgirgXLYM" },
      ],
      cardio: { name: "Treadmill", duration: "15mins", description: "5 mins walk and 5 mins run" }
    },
    day2: {
      title: "Day 2 (Shoulder and Biceps)",
      exercises: [
        { name: "Seated Military Press", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=oBGeXxnigsQ&t=20s" },
        { name: "DB Side Laterals", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=3VcKaXpzqRo&t=7s" },
        { name: "DB Shrugs", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=cJRVVxmytaM&t=4s" },
        { name: "Barbell Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
        { name: "Alternate DB Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=sAq_ocpRh_I" },
        { name: "Concentration Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=ebqgIOiYGEY&t=1s" },
        { name: "Decline Crunches", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=QhGU5cmNZds" },
        { name: "Decline Leg raises", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=KxqaUuyBqC8" },
      ],
      cardio: { name: "Treadmill", duration: "15mins", description: "5 mins walk and 5 mins run" }
    },
    day3: {
      title: "Day 3 (Back and Legs)",
      exercises: [
        { name: "Bent Over Row", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=vT2GjY_Umpw&t=1s" },
        { name: "Lat pull downs", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=0oeIB6wi3es" },
        { name: "Reverse Pulldown", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=D-aYXhHBDI8" },
        { name: "Squats", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=aclHkVaku9U&t=2s" },
        { name: "Leg Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=Mv_8-XwVMFQ&t=11s" },
        { name: "Leg Press", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=GvRgijoJ2xY" },
        { name: "Seated Calves", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=hXdB-qariQ4" },
      ],
      cardio: { name: "Cycling", duration: "15mins" }
    },
    day4: {
      title: "Day 4 (Chest and Triceps)",
      exercises: [
        { name: "Flat Bench Press", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=rT7DgCr-3pg&t=2s" },
        { name: "Incline DB Press", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=0G2_XV7slIg&t=1s" },
        { name: "Machine Flys", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=u56jywgbvE4" },
        { name: "Skull Crusher", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=d_KZxkY_0cM&t=3s" },
        { name: "Cable Bent over Extension", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=gevFKmkqLGk" },
        { name: "Cable or V grip Pushdown", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=GCa8Q4e7laU" },
        { name: "Russian twister", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=wkD8rjkodUI&t=1s" },
        { name: "Bicycle Crunches", sets: 4, reps: "25 to 30 reps each side", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=9FGilxCbdz8&t=3s" },
        { name: "Side bends", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=dL9ZzqtQI5c&t=10s" },
      ]
    },
    day5: {
      title: "Day 5 (Shoulder and Biceps)",
      exercises: [
        { name: "Standing OHP", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=2yjwXTZQDDI&t=27s" },
        { name: "Upright Rows", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=amCU-ziHITM&t=18s" },
        { name: "Rear Machine Fly", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=6yMdhi2DVao&t=5s" },
        { name: "Barbell Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
        { name: "Preacher Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=1-xvtHS9PsU" },
        { name: "Hammer Curls", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
        { name: "Decline Crunches", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=QhGU5cmNZds" },
        { name: "Decline Leg raises", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=KxqaUuyBqC8" },
      ],
      cardio: { name: "Treadmill", duration: "15mins", description: "5 mins walk and 5 mins run" }
    },
    day6: {
      title: "Day 6 (Back and Legs)",
      exercises: [
        { name: "DeadLift", sets: 3, reps: "6 to 8", rest: "2 mins", videoLink: "https://www.youtube.com/watch?v=ytGaGIn3SjE&t=306s" },
        { name: "Lat pull downs", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=0oeIB6wi3es" },
        { name: "Seated rows", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=GZbfZ033f74&t=32s" },
        { name: "Incline DB rows", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=2LxN3_3atps" },
        { name: "DB Rowing", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=-koP10y1qZI&t=44s" },
        { name: "Squats", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=aclHkVaku9U&t=2s" },
        { name: "Lunges", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=wrwwXE_x-pQ&t=1s" },
        { name: "Leg Extension", sets: 4, reps: "10 to 12", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=YyvSfVjQeL0&t=13s" },
        { name: "Seated Calves", sets: 4, reps: "10 to 15", rest: "1 min", videoLink: "https://www.youtube.com/watch?v=hXdB-qariQ4" },
      ],
      cardio: { name: "Cycling", duration: "15mins" }
    }
  };   
  const WorkoutPlan = () => {
    const [selectedDay, setSelectedDay] = useState('day1');
  
    const renderExercises = (exercises) => {
      if (!exercises || exercises.length === 0) {
        return <p className="text-gray-500 italic">No exercises for this day.</p>;
      }
      return (
        <ul className="space-y-4">
          {exercises.map((exercise, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg text-indigo-700">{exercise.name}</span>
                <a href={exercise.videoLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                  <FaYoutube size={24} />
                </a>
              </div>
              <div className="mt-2 text-gray-600">
                <span>{exercise.sets} sets</span> • <span>{exercise.reps} reps</span> • <span>{exercise.rest} rest</span>
              </div>
            </li>
          ))}
        </ul>
      );
    };
  
    const selectedWorkout = workoutData[selectedDay];
  
    if (!selectedWorkout) {
      return (
        <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
          <h1 className="text-4xl font-bold mb-4 text-center text-indigo-800">Nithin's Workout Plan</h1>
          <p className="text-center text-red-500">No workout data available for the selected day.</p>
        </div>
      );
    }
  
    return (
      <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Nithin's Workout Plan</h1>
        <div className="max-w-3xl mx-auto">
          <Select
            onValueChange={setSelectedDay}
            value={selectedDay}
            className="mb-6"
          >
            {Object.keys(workoutData).map((day) => (
              <SelectItem key={day} value={day}>
                {workoutData[day].title}
              </SelectItem>
            ))}
          </Select>
          <Card className="mb-6 overflow-hidden">
            <CardHeader className="bg-indigo-600 text-white text-xl font-semibold py-4">
              <div className="flex items-center">
                <FaDumbbell className="mr-2" />
                {selectedWorkout.title}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {selectedWorkout.warmup && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2 text-indigo-700">Warm-up</h2>
                  <p className="text-gray-700">{selectedWorkout.warmup.name} - {selectedWorkout.warmup.duration}</p>
                  <a href={selectedWorkout.warmup.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center mt-2">
                    <FaYoutube className="mr-1" /> Watch Warm-up Video
                  </a>
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 text-indigo-700">Exercises</h2>
                {renderExercises(selectedWorkout.exercises)}
              </div>
              {selectedWorkout.cardio && (
                <div>
                  <h2 className="text-lg font-semibold mb-2 text-indigo-700">Cardio</h2>
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center text-gray-700">
                      <FaRunning className="mr-2 text-green-500" />
                      <span>{selectedWorkout.cardio.name} - {selectedWorkout.cardio.duration}</span>
                    </div>
                    {selectedWorkout.cardio.description && (
                      <p className="mt-2 text-gray-600">{selectedWorkout.cardio.description}</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  export default WorkoutPlan;




