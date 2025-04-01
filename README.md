# FOBEWORK Backend Task

A NestJS-based backend application with MongoDB integration, JWT authentication, and Swagger documentation.

## Prerequisites

- Node.js >= 18
- pnpm >= 8
- MongoDB (local or Atlas instance)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fobework-backend-task
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.development.local` to `.env` for local development
   - Copy `.env.production` to `.env` for production environment

Required environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_TOKEN_AUDIENCE=your_token_audience
JWT_TOKEN_ISSUER=your_token_issuer
JWT_ACCESS_TOKEN_TIME_TO_LIVE=3600
JWT_REFRESH_TOKEN_TIME_TO_LIVE=604800
```

## Running the Application

### Development Mode
```bash
pnpm start:dev
```
The application will be available at `http://localhost:7231`

### Production Mode
```bash
pnpm build
pnpm start:prod
```

## API Documentation

The API documentation is available through Swagger UI at:
- Development: `http://localhost:8111/api`
- Production: `https://fobework-backend-task.onrender.com/api`

## Available Scripts

- `pnpm start:dev` - Start the application in development mode with hot-reload
- `pnpm build` - Build the application
- `pnpm start:prod` - Start the application in production mode
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm test:cov` - Generate test coverage report
- `pnpm lint` - Lint the codebase
- `pnpm format` - Format the code using Prettier
- `pnpm doc` - Generate API documentation using Compodoc

## Project Structure

```
src/
├── auth/           # Authentication module
├── users/          # Users module
├── common/         # Common utilities and decorators
├── config/         # Configuration module
└── main.ts         # Application entry point
```

## Technologies Used

- NestJS - A progressive Node.js framework
- MongoDB - Database
- Mongoose - MongoDB ODM
- JWT - Authentication
- Swagger - API Documentation
- TypeScript - Programming Language
- Jest - Testing Framework

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the UNLICENSED License.
