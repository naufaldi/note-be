# Elysia with Bun runtime

# Notes API

## Description

A simple Notes API built with Elysia and Prisma. This API allows users to create, read, update, and delete notes. It also includes authentication features and API documentation.

## Features

- Create, read, update, and delete notes
- User authentication
- API documentation available at `/docs`

## Technologies Used

- [Elysia](https://elysiajs.com/) - A web framework for building APIs
- [Prisma](https://www.prisma.io/) - A modern database toolkit
- [Swagger](https://swagger.io/) - API documentation

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A PostgreSQL or MySQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add your database connection string and any other necessary environment variables.

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:
   ```bash
   npm run start
   # or
   yarn start
   ```

### API Endpoints

- **GET /notes** - Retrieve all notes
- **GET /notes/:id** - Retrieve a note by ID
- **POST /notes** - Create a new note
- **PUT /notes/:id** - Update a note by ID
- **DELETE /notes/:id** - Delete a note by ID

### Documentation

API documentation is available at `/docs` after starting the server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Elysia and Prisma teams for their amazing frameworks!
