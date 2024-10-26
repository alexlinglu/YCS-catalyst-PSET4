import './App.css';

const courses = [
  { id: 1, name: "Introduction to Computer Science", code: "CPSC 201", credits: 4 },
  { id: 2, name: "Data Structures and Programming Techniques", code: "CPSC 223", credits: 4 },
  { id: 3, name: "Mathematical Tools for Computer Science", code: "CPSC 202", credits: 3 },
  { id: 4, name: "Introduction to Systems Programming and Computer Organization", code: "CPSC 323", credits: 4 },
  { id: 5, name: "Artificial Intelligence", code: "CPSC 470", credits: 3 },
];

function App() {
  // TODO: Implement state for selectedCourses

  // TODO: Implement addCourse function

  // TODO: Implement removeCourse function

  return (
    <div className="App">
      <h1>Yale Course Scheduler</h1>
      
      <div className="course-list">
        <h2>Available Courses</h2>
        {/* TODO: Display the list of available courses */}
      </div>
      
      <div className="schedule">
        <h2>My Schedule</h2>
        {/* TODO: Display the selected courses */}
        {/* TODO: Display the total credit hours */}
      </div>
    </div>
  );
}

export default App;
