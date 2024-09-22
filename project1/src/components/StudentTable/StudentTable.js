import StudentItem from "../StudentItem/StudentItem";

function StudentTable({students, deleteStudent}) {
    return (
        <div>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <h1>Danh sách sinh viên</h1>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th scope='col'>Mã sinh viên</th>
                                <th scope='col'>Họ đệm</th>
                                <th scope='col'>Tên</th>
                                <th scope='col'>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student) => {
                                return <StudentItem deleteStudent={deleteStudent} student={student} key={student.id}/>
                            })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentTable;