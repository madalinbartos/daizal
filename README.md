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
https://github.com/madalinbartos/daizal/assets/80919993/01ef9d27-947d-483a-9294-de3dba28c1b6

## Getting Started
To get started with Daizal, clone the repository, and then follow these steps:

### Backend (server)
- Navigate to the `server` directory.
- Install the necessary dependencies using `yarn install`.
- Create a `.env` file with your environment variables based on the `.env.example` file.
- Set up a PostgreSQL server with the configuration from `ormconfig.json`.
- Set up a Redis server.
- Build the app using `yarn build`.
- Run database migrations using `yarn typeorm migration:run`.
- Start the app using `yarn dev`.

### Frontend (client)
- Navigate to the `client` directory.
- Install the necessary dependencies using `yarn install`.
- Start the app using `yarn dev`.
- Access the app in your browser at https://localhost:3000.

## License
This project is licensed under the [MIT License](LICENSE).
