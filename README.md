# DAIZAL

## Overview
Daizal is a mini version of Reddit, allowing users to freely share their thoughts and engage with others in a similar fashion.

## Features
- **User Authentication:** Users can register and log in using their email or username.
- **Post Management:** Once logged in, users can:
  - View all posts
  - Upvote or downvote posts
  - Click on individual posts to see more details
  - Create new posts
  - Edit or delete their own posts
  - Load more posts dynamically with a convenient button.

## Technologies Used

### Frontend
- React.js
- Next.js
- TypeScript
- Apollo Client

### Backend
- Node.js
- TypeScript
- GraphQL
- TypeGraphQL
- TypeORM
- PostgreSQL
- Redis

## Demo

## Getting Started
To get started with Daizal, clone the repository, and then follow these steps:

### Frontend
1. Navigate to the `frontend` directory.
2. Install the necessary dependencies using `yarn install`.
3. Run the frontend app using `yarn dev`.
4. Access the app in your browser at https://localhost:3000.

### Backend
1. Navigate to the `backend` directory.
2. Install the necessary dependencies using `yarn install`.
3. Create a `.env` file in the backend directory with your environment variables based on the `.env.example` file.
4. Set up a PostgreSQL server with the configuration from `ormconfig.json`.
5. Set up a Redis server.
6. Run database migrations using `yarn typeorm migration:run`.
7. Start the app using `yarn dev`.

## License
This project is licensed under the [MIT License](LICENSE).