import React from 'react';
import './Profile.css'
const Profile = ({user}) => {
    console.log(user)
    return (
        <div className='Profile-head d-flex justify-content-center'>
            <div className='profile-body'>
                <h4>Name : {user?.name}</h4>
                <p>Email : {user?.email} </p>
                <p>Gender : {user?.gender} </p>
            </div>
        </div>
    );
};

export default Profile;