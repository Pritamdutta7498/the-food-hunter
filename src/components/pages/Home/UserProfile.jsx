import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='px-5 md:px-36'>
      <div className='p-5 md:p-10 py-10 md:py-16 relative'>
        <div className='flex justify-center'>
          <div className="-mb-16 z-20">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='z-10'>
            <div className="card card-compact w-96 bg-pink-100 shadow-xl p-5">
              <div className="card-body mt-14">
                <h2 className="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary">Edit profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;