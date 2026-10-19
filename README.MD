- [Setup](#setup)
  - [Adding Resume Data](#adding-resume-data)
  
# Quick Start
Update npm to 11.19.1
update node to 24.22.0
npm install in both client and server directories
Add a .env.development to client directory
Run ./start.sh

## Running with Docker
Build the image from the project root and start the app:

```sh
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```

Open http://localhost:3000. The default build makes API requests to the same origin,
so the frontend and API work together in the same container. To use a separately
hosted API, pass its base URL while building, for example:

```sh
docker build --build-arg VITE_API_BASE_URL=https://api.example.com -t portfolio .
```

# Setup
## Adding Resume Data
    in ./server/data/resume.example.json you will find the example data the frontend queries to populate resume page
    Add your own data to resume.json and update where the resume points to in the api at ./server/routes/resume.js
