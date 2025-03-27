# CarbonSci (CCT)

<div align="center">
  <img src="assets/logo.svg" alt="CarbonSci Logo" width="200"/>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Web3](https://img.shields.io/badge/Web3-F16822?style=flat-square&logo=web3.js&logoColor=white)](https://web3js.readthedocs.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

CarbonSci is a Web3-based Decentralized Science (DeSci) platform focused on environmental science, carbon credit markets, and AI-driven sustainable development research.

## Project Architecture

### Backend (Node.js + Express)
- `server/`
  - `src/`: Backend source code
    - `controllers/`: Controllers
    - `models/`: Data models
    - `routes/`: API routes
    - `services/`: Business logic
    - `utils/`: Utility functions
  - `config/`: Configuration files

### Frontend (React)
- `client/`
  - `src/`: React application source code
    - `components/`: UI components
    - `pages/`: Page components
    - `hooks/`: React hooks
    - `utils/`: Utility functions
    - `services/`: API services
  - `public/`: Static assets

### Database
- MongoDB: Store user data, proposals, transaction records, etc.

## Development Setup

### Prerequisites
- Node.js >= 16
- MongoDB
- MetaMask wallet

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/yourusername/carbonsci.git
cd carbonsci
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Start development environment
```bash
# Start backend server
cd server
npm run dev

# Start frontend development server
cd client
npm start
```

## Core Features

### MVP Phase
1. User System
   - User registration/login
   - Wallet connection
   - Profile management

2. Proposal System
   - Proposal submission
   - Proposal listing
   - Basic voting functionality
   - Proposal details page

3. Token System
   - Token balance query
   - Token transfer
   - Transaction history

4. Data Contribution System
   - Environmental data upload
   - Data validation
   - Contribution rewards

5. User Interface
   - Responsive design
   - Dark/Light theme
   - Multi-language support

## Tech Stack Details

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Web3.js (Ethereum interaction)
- Socket.IO (Real-time communication)

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Web3-React
- React Router
- Axios

### Development Tools
- ESLint
- Prettier
- Jest (Testing)
- Docker (Containerization)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - See LICENSE file for details 