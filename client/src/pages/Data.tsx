import React from 'react';

const Data: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Environmental Data
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Upload Environmental Data
          </h3>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <input
              type="file"
              className="hidden"
              id="data-upload"
              accept=".csv,.json,.xlsx"
            />
            <label
              htmlFor="data-upload"
              className="cursor-pointer bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-sm font-medium"
            >
              Choose File
            </label>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              or drag and drop your file here
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Contributions
          </h3>
          <div className="space-y-4">
            {/* Data contribution items will be mapped here */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Air Quality Data
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Uploaded on 2024-02-20
                </p>
              </div>
              <span className="text-sm text-primary">
                100 CCT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data; 