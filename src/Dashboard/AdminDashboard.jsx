// AdminDashboard.jsx
import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const API_BASE =   import.meta.env.VITE_API_URL || "https://portfolio-server-26gr.onrender.com";  

  // Verify admin
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_BASE}/verify-admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        // Store password in sessionStorage (or keep in state)
        sessionStorage.setItem("adminPassword", password);
        fetchMessages(password);
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  // Fetch messages using password as adminKey
  const fetchMessages = async (adminPassword) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/messages`, {
        headers: { adminkey: adminPassword },
      });
      if (res.status === 403) {
        setIsAuthenticated(false);
        sessionStorage.removeItem("adminPassword");
        setError("Session expired. Please login again.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  // Delete a message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const adminPassword = sessionStorage.getItem("adminPassword");
      const res = await fetch(`${API_BASE}/messages/${id}`, {
        method: "DELETE",
        headers: { adminkey: adminPassword },
      });
      if (res.ok) {
        setMessages(messages.filter(msg => msg._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      alert("Error deleting");
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("adminPassword");
    if (savedPassword) {
      setIsAuthenticated(true);
      fetchMessages(savedPassword);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("adminPassword");
    setIsAuthenticated(false);
    setMessages([]);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded mb-4 dark:bg-gray-700 dark:text-white"
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 mt-6">
          <h1 className="text-3xl mt-12 font-bold text-gray-800 dark:text-white">
            Admin Dashboard – Messages
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">No messages yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {messages.map((msg) => (
                  <tr key={msg._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{msg.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{msg.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{msg.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate">{msg.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-3">
                        <button
                            onClick={() => setSelectedMessage(msg)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                            Details
                        </button>
                        <button
                            onClick={() => deleteMessage(msg._id)}
                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                        >
                            Delete
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl p-6 relative">

                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedMessage(null)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                    >
                        ✕
                    </button>

                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Message Details
                    </h2>

                    <div className="space-y-4">

                        <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            Name:
                        </span>
                        <p className="text-gray-900 dark:text-white">
                            {selectedMessage.name}
                        </p>
                        </div>

                        <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            Email:
                        </span>
                        <p className="text-gray-900 dark:text-white">
                            {selectedMessage.email}
                        </p>
                        </div>

                        <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            Subject:
                        </span>
                        <p className="text-gray-900 dark:text-white">
                            {selectedMessage.subject}
                        </p>
                        </div>

                        <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            Date:
                        </span>
                        <p className="text-gray-900 dark:text-white">
                            {new Date(
                            selectedMessage.createdAt
                            ).toLocaleString()}
                        </p>
                        </div>

                        <div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                            Message:
                        </span>

                        <div className="mt-2 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white whitespace-pre-wrap">
                            {selectedMessage.message}
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;