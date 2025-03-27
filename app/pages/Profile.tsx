import React from 'react';
import { useWeb3React } from '@web3-react/core';

const Profile: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {account ? account.slice(0, 1).toUpperCase() : '?'}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not Connected'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {account ? 'Connected with MetaMask' : 'Please connect your wallet'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              CCT Balance
            </h3>
            <p className="text-2xl font-bold text-primary">
              0 CCT
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Data Contributions
            </h3>
            <p className="text-2xl font-bold text-primary">
              0
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Active Proposals
            </h3>
            <p className="text-2xl font-bold text-primary">
              0
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Voting Power
            </h3>
            <p className="text-2xl font-bold text-primary">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 