import logo from './logo.svg';
import './App.css';
import StudentItem from "./components/StudentItem/StudentItem";
import StudentTable from "./components/StudentTable/StudentTable";
import {useState} from "react";
import StudentForm from "./components/StudentForm/StudentForm";
// eslint-disable-next-line react-hooks/rules-of-hooks


function App() {
  const [students, setStudents] = useState(
      [{id:1, firstName :"Tran Minh", lastName: "Khanh"},
    {id:2, firstName : "Giang Trung", lastName : "Quân"},
    {id:3, firstName : "Hoàng Anh" ,lastName : "Trung"},
    {id:4 ,firstName : "Vũ Văn Thành", lastName : "Đô"},
    {id:5 ,firstName : "Trần Hưng", lastName : "Đạo"}
  ])
  function addStudent(firstName, lastName) {
    const newStudent = {id: students.length+1, firstName: firstName, lastName: lastName}
    setStudents([...students, newStudent]);
  }
  function deleteStudent(id) {
    const temp = students.filter((student) => student.id != id)
    setStudents(temp);
  }
  const [showForm, setShowForm] = useState(true)
  return (
      <div className="container mt-4">
        <StudentTable students={students} deleteStudent ={deleteStudent} />
        <button className="btn btn-primary"
        onClick={() => setShowForm(!showForm)}>
          {showForm ? "Đóng form" : "Mở form"}
        </button>
        {showForm && <StudentForm  addStudent={addStudent}/> }
      </div>
  );
}

export default App;
