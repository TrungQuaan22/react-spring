import {useState} from "react";

function StudentForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const saveStudent = () => {
        if(lastName && firstName) {
            props.addStudent(firstName,lastName)
            setLastName("")
            setFirstName("")
        }
    }
    return (
        <>
            <h2>Thêm sinh viên</h2>
            <div className="form-group">
                <label>Họ đệm</label>
                <input type='text'
                       className="form-control"
                       value={firstName}
                       onChange={(e) => {
                           setFirstName(e.target.value)
                       }}
                />
            </div>
            <div className="form-group">
                <label>Tên</label>
                <input type='text'
                       className="form-control"
                       value={lastName}
                       onChange={(e) => {
                           setLastName(e.target.value)
                       }}
                />
            </div>
            <button onClick={saveStudent} className="btn btn-primary">Thêm sinh viên</button>
        </>
    )
}

export default StudentForm;