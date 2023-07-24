import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission
    console.log(values);
    const newUser = { ...values };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    resetForm();
  };

  return (
    <div className='d-flex justify-content-evenly'>
     <div className='w-45 border border-warning px-4 py-4 pt-4'> 
     <Formik
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={handleSubmit}
   >
     <Form>
       <div>
         <label htmlFor="email">Email:</label>
         <Field type="email" id="email" name="email" className="form-control"/>
         <ErrorMessage name="email" component="div" className="form-text  text-danger"/>
       </div>

       <div>
         <label htmlFor="password">Password:</label>
         <Field type="password" id="password" name="password" className="form-control" />
         <ErrorMessage name="password" component="div" className="form-text  text-danger"/>
       </div>

       <button type="submit" className="btn btn-primary mt-3">Submit</button>
     </Form>
   </Formik>
</div>

{users.length > 0 && (
  <div className='w-45 border border-primary px-4 py-4 pt-4'>
    <h2>User List:</h2>
    <table className="table table-bordered border border-danger table-hover">
      <thead className="table-warning">
        <tr>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody className="table-dark">
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
    </div>
  );
};

export default LoginForm;
