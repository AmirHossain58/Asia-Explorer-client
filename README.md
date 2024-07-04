# Asia Explorer - Tourism Management Website

## Live Link
[Asia Explorer](https://b9-a10-asia-explorer-client.web.app/)

## Server Code
[server repo](https://github.com/AmirHossain58/Asia-Explorer-server)
## About

Asia Explorer is a Tourism Management website

## Key Features

- Add Tourist Spot Page: A form for adding new tourist spots, accessible via a private route.
- My List Page: Allows users to manage their added tourist spots, accessible via a private route.
- Update Page: Enables users to update information about their added tourist spots, accessible via a private route.
- Delete Button: Allows users to delete their added tourist spots with a confirmation prompt.
- Dark/Light Theme Toggle: Allows users to switch between dark and light themes on the home page.

## Technologies Used

- Mongodb: database management.
- Noed: : Backend services.
- React: Frontend framework for building a dynamic and interactive user interface.
- React Router: Navigation and routing within the application.
- Tailwind CSS: Utility-first CSS framework for styling components.
- React Toastify: Displaying notifications and alerts to users.
- SweetAlert2: Creating custom modal dialogs and alerts.

## Dependencies

- @emotion/react
- @heroicons/react
- @material-tailwind/react
- firebase
- react
- react-dom
- react-helmet-async
- react-hook-form
- react-icons
- react-router-dom
- react-toastify
- react-tooltip
- sweetalert2


Installation and Setup
Follow these steps to clone and run the Hostel Meals Management System locally:

Clone the clint and server Repository

```
git clone https://github.com/AmirHossain58/Asia-Explorer-client.git
git clone https://github.com/AmirHossain58/Asia-Explorer-server.git
cd //<repository-folder>
```
Install Server Dependencies
```
cd //server
npm install
```
Install Client Dependencies
```
cd //client
npm install
```
Set Up Environment Variables

## Create a .env file in the client directory with:

//firebase env
- VITE_apiKey=//api key
- VITE_authDomain=// auth dommain
- VITE_appId=// api id
- VITE_projectId=//projectId
- VITE_storageBucket=//storageBucket
- VITE_messagingSenderId=//messagingSenderId

- VITE_API_URL=http://localhost:8000


## Create a .env file in the server directory with:

- DB_USER= //database user name
- DB_PASS=//password
Run the Server

```
cd //server
npm start
```
Run the Client
```
cd //client
npm start
```

