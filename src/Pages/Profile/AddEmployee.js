import React from 'react';

const AddEmployee = () => {
    return (
        <div className='add-employee-header pb-5 className="" '>
            <h4>Add Employee</h4>
            <hr />
            <div className='d-lg-flex'>
                <div>
                    <div className=''>
                        <input placeholder='Profile Image Link ' type="text" class="form-control " />
                        <p>Maximum 1px picture added</p>
                    </div>
                </div>
                <div className='employee-name'>
                   
                   <div>
                   <p>Employee full Name</p>
                   <input className="" type="text"  placeholder='First Name'/>
                    <input className=""  type="text" placeholder='Middle Name' />
                    <input className=""  type="text" placeholder='Full Name' />
                   </div>

                    <div className='my-4'>
                    <p className='m-0'>Employee Id</p>
                    <input placeholder='33221' type="text" />
                    </div>
                    <hr />
                    <div>
                    <button className='btn btn-danger'>Cancle</button>
                    <input  className='btn btn-success ms-lg-5 px-5 ms-2' type="submit" value="Save" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddEmployee;