import React from 'react';

const Proposals: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Research Proposals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Proposal cards will be mapped here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Carbon Capture Technology
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Research on advanced carbon capture methods using AI optimization.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Status: Open
            </span>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals; 