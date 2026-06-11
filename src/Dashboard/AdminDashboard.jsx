import React from 'react';

const AdminDashboard = () => {
    return (
        <div className='h-screen flex items-center justify-center text-2xl font-bold text-black'>
            This is Dashboard. Only admin can access this page. If you are not admin, please go back to home page.
        </div>
    );
};

export default AdminDashboard;