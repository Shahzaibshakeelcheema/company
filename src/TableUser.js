import React from 'react'

const TableUser = (MyUser) => {
    //console.log("first")
    //console.log(MyUser2)
    const MyUser2=MyUser;
    //const {MyUser} = props;
    //const {MyUser} = props;
    // console.log('first')
    // console.log((MyUser2))
    //const [NewUser , setNewUser] = useState([])
    //setNewUser(MyUser)
    //const MyUser2 = Object.values(MyUser)
  return (
    <div>

    <table className="table table-bordered table-hover">
            <thead className="table-warning">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Gender</th>
                
              </tr>
            </thead>
            <tbody className='table-dark'>
          { Object.values(MyUser2).map((user,index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td>{user.gender}</td>
                  
                </tr>
              ))}
            
              
            </tbody>
          </table>
    </div>
  )
}

export default TableUser