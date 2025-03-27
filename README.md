# CarbonDesci Platform

A decentralized platform for environmental science research and carbon credit management.

## Overview

CarbonDesci Platform is a Web3-enabled platform that connects environmental researchers, data contributors, and stakeholders in the carbon credit ecosystem. The platform facilitates:

- Research proposal submission and funding
- Environmental data collection and validation
- Carbon credit token (CCT) management
- Decentralized governance for research funding

## Technology Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Web3.js for blockchain integration
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

### Smart Contracts
- Solidity
- Hardhat for development
- OpenZeppelin for standard contracts

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- MetaMask wallet
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CarbonDesci/CarbonDesci-Platform.git
cd CarbonDesci-Platform
```

2. Install backend dependencies:
```bash
cd server
npm install
cp .env.example .env
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
cp .env.example .env
```

4. Configure environment variables:
- Update `server/.env` with your MongoDB URI and JWT secret
- Update `client/.env` with your API URL and Web3 provider

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend application:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Features

- 🔐 Secure authentication with JWT and Web3 wallet
- 📊 Dashboard for research proposals and data contributions
- 💰 CCT token management and staking
- 🗳️ Decentralized voting system for proposals
- 📱 Responsive design for all devices

## Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/CarbonDesci/CarbonDesci-Platform](https://github.com/CarbonDesci/CarbonDesci-Platform)

## Acknowledgments

- OpenZeppelin for smart contract libraries
- The Web3 community for inspiration and support
- All contributors who help make this project better 