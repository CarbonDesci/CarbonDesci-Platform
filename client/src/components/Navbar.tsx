import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

const Navbar: React.FC = () => {
  const { account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="CarbonSci" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                CarbonSci
              </span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/proposals"
                className="text-gray-900 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Proposals
              </Link>
              <Link
                to="/data"
                className="text-gray-900 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Data
              </Link>
              <Link
                to="/profile"
                className="text-gray-900 dark:text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {account ? (
              <button
                onClick={disconnect}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                {account.slice(0, 6)}...{account.slice(-4)}
              </button>
            ) : (
              <button
                onClick={connect}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 