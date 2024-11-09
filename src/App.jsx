import './App.css';
import { useState } from 'react';

const courses = [
  { id: 1, name: "Introduction to Computer Science", code: "CPSC 201", credits: 4 },
  { id: 2, name: "Data Structures and Programming Techniques", code: "CPSC 223", credits: 4 },
  { id: 3, name: "Mathematical Tools for Computer Science", code: "CPSC 202", credits: 3 },
  { id: 4, name: "Introduction to Systems Programming and Computer Organization", code: "CPSC 323", credits: 4 },
  { id: 5, name: "Artificial Intelligence", code: "CPSC 470", credits: 3 },
];

function App() {
  let courseElements = courses.map((element) => <li key={element.id} className="list">
    <span className="list-element">{element.name}</span>
    <span className="list-element">{element.code}</span>
    <span className="list-element">{element.credits}</span>
    <button className="button" onClick={() => {addCourse(element); updateCredits(element.credits)} }>Add</button>
    </li>);
  // TODO: Implement state for selectedCourses
  let [courseList, changeCourseList] = useState([]);
  let courseListElements = courseList.map((element) => <li key={element.id} className="list">
  <span className="list-element">{element.name}</span>
  <span className="list-element">{element.code}</span>
  <span className="list-element">{element.credits}</span>
  <button className="button" onClick={() => {removeCourse(element); updateCredits(-1 * element.credits)}}>Remove</button>
  </li>);
  // TODO: Implement addCourse function
  function addCourse(course){
    let newCourseList = [...courseList];
    newCourseList.push(course);
    changeCourseList(newCourseList);
  }
  // TODO: Implement removeCourse function
  function removeCourse(course){
    let newCourseList = [...courseList];
    let index = newCourseList.indexOf(course);
    newCourseList = newCourseList.toSpliced(index, 1);
    changeCourseList(newCourseList);
  }
  let [courseHours, changeCourseHours] = useState(0);
  function updateCredits(currentCredits){
    let newCourseHours = currentCredits;
    courseList.forEach((course) => {
      newCourseHours = course.credits + newCourseHours;
    })
    changeCourseHours(newCourseHours);
  }
  return (
    <div className="App">
      <h1>Yale Course Scheduler</h1>
      
      <div className="course-list">
        <h2>Available Courses</h2>
        {/* TODO: Display the list of available courses */}
        <ul >{courseElements}</ul>
      </div>
      
      <div className="schedule">
        <h2>My Schedule</h2>
        {/* TODO: Display the selected courses */}
        <ul id="course-schedule">
          {courseListElements}
        </ul>
        {/* TODO: Display the total credit hours */}
          Total Credits: {courseHours}
      </div>
    </div>
  );
}

export default App;
