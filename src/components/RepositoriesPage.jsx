import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed top-0 left-0 w-56 bg-white shadow-md h-full transition-transform transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:relative md:translate-x-0 md:flex md:flex-col`}
  >
    <div className="p-4">
      <div className="flex items-center mb-6">
        <img
          src="src\assets\Subtract.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-3 text-xl font-semibold">CodeAnt AI</span>
      </div>
      <div className="mb-6">
        <div className="flex items-center">
          <span className="ml-3">Sonam...</span>
        </div>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a className="flex items-center p-2 text-blue-600 bg-blue-100 rounded-md" href="#">
              <i className="fas fa-book mr-3"></i>
              Repositories
            </a>
          </li>
          <li className="mb-2">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md" href="#">
              <i className="fas fa-code mr-3"></i>
              AI Code Review
            </a>
          </li>
          <li className="mb-2">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md" href="#">
              <i className="fas fa-shield-alt mr-3"></i>
              Cloud Security
            </a>
          </li>
          <li className="mb-2">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md" href="#">
              <i className="fas fa-question-circle mr-3"></i>
              How to Use
            </a>
          </li>
          <li className="mb-2">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md" href="#">
              <i className="fas fa-cog mr-3"></i>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="absolute bottom-0 w-full p-4">
      <div className="flex items-center mb-4">
        <i className="fas fa-phone-alt mr-3"></i>
        Support
      </div>
      <div className="flex items-center">
        <i className="fas fa-sign-out-alt mr-3"></i>
        Logout
      </div>
    </div>
    <button
      onClick={toggleSidebar}
      className="absolute top-4 right-4 text-2xl md:hidden"
    >
      &times;
    </button>
  </div>
);

const RepositoryList = () => {
  const repositories = [
    { name: "design-system", visibility: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
    { name: "codeant-ci-app", visibility: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
    { name: "analytics-dashboard", visibility: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
    { name: "mobile-app", visibility: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
    { name: "e-commerce-platform", visibility: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
    { name: "blog-website", visibility: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
    { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
  ];

  return (
    <ul>
      {repositories.map((repo, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 bg-white mb-2 rounded-md shadow-sm"
        >
          <div>
            <h2 className="text-lg font-semibold">
              {repo.name}
              <span className={repo.visibility === "Public" ? "text-blue-600" : "text-gray-600"}>
                {` ${repo.visibility}`}
              </span>
            </h2>
            <p className="text-gray-600">
              {repo.language} • {repo.size} • Updated {repo.updated}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const RepositoriesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 md:ml-65">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Repositories</h1>
          <div className="flex items-center md:hidden">
            <button onClick={toggleSidebar} className="text-xl">
              &#9776;
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <button className="px-4 py-2 bg-gray-200 rounded-md mr-2">Refresh All</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Add Repository</button>
          </div>
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search Repositories"
          />
        </div>
        <RepositoryList />
      </div>
    </div>
  );
};

export default RepositoriesPage;