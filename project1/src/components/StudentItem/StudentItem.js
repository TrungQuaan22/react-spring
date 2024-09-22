function StudentItem({student, deleteStudent}) {

    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>
                <button className="btn btn-danger"
                        onClick={() => deleteStudent(student.id)}
                >Xóa</button>
            </td>
        </tr>
    )
}
export default StudentItem;