# Drone Fleet Management Dashboard

This web page is built with React.js and Tailwind CSS, and it is fully responsive across all screens.

`Live Link :`  https://v1-drone-fleet-management.netlify.app/

## `How to run this project: `

Step 1 : 
- Download zip file from this repo https://github.com/manishgupta416/dronefleet  or,

- git clone manishgupta416/dronefleet


Step 2 : 
- npm install (to install all the dependency) ,
- npm run dev (to run react project)

Step 3 : 
Either Click on Login as Guest or fill this 
Test Credentials - 
  {
     email: "manish@gmail.com",  password: "password123" },


### `Docker `
Run this following commands


Step 1 : docker build -t react-app:dev .

Step 2 : docker images 

Step 3 : docker run -p 3000:3000 react-app:dev


### `Docker Hub `
Run this following commands

Step 1 : docker pull manishgupta416/dronefleet:dev

Step 2 : docker run -it manishgupta416/dronefleet:dev

Optional :
For interactive mode:  
docker run -it -p 3000:3002 manishgupta416/dronefleet:dev

For detached mode (background):  
docker run -d -p 3000:3002 manishgupta416/dronefleet:dev
