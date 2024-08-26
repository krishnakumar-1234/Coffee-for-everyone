import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-lg font-bold">User Dashboard</h1>
          <button className="text-black bg-blue-800 px-4 py-2 rounded">Logout</button>
        </div>
      </nav>

      {/* Sidebar & Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-black p-4">
          <ul>
            <li className="mb-4">
              <a href="#profile" className="text-blue-600 hover:text-blue-800">Profile</a>
            </li>
            <li className="mb-4">
              <a href="#settings" className="text-blue-600 hover:text-blue-800">Settings</a>
            </li>
            <li className="mb-4">
              <a href="#analytics" className="text-blue-600 hover:text-blue-800">Analytics</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 ">
          {/* Profile Section */}
          <section id="profile" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="bg-black p-4 shadow rounded">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> john.doe@example.com</p>
              <p><strong>Member since:</strong> January 2024</p>
            </div>
          </section>

          {/* Settings Section */}
          <section id="settings" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="bg-black p-4 shadow rounded">
              <p>Settings content goes here...</p>
            </div>
          </section>

          {/* Analytics Section */}
          <section id="analytics">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <div className="bg-black p-4 shadow rounded">
              <p>Analytics content goes here...</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
