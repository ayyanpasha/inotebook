## Instructions to Use iNoteBook

### 1. Download the Build Folder

To use iNoteBook, you can download the build folder from the repository. Follow these steps:

1. Navigate to the repository containing the iNoteBook project.
2. Look for the build folder in the project directory.
3. Download the build folder to your local machine.

### 2. Download MongoDB

iNoteBook uses MongoDB as its database. Follow these steps to download and install MongoDB:

1. Go to the [MongoDB website](https://www.mongodb.com/try/download/community) to download the MongoDB Community Server.
2. Choose the appropriate version for your operating system and download it.
3. Install MongoDB by following the installation instructions provided on the website.

### 3. Start the Express Server

iNoteBook requires an Express server to handle backend operations. Clone from https://github.com/ayyanpasha/inotebookBackend . Follow these steps to start the Express server:

1. Navigate to the directory where the Express server code is located.
2. Install dependencies by running `npm install`.
3. Set up environment variables by creating a `.env` file with the necessary configurations, JWT_SECRET="Any String"
4. Start the Express server by running `npm start` or `node index.js`.

### 4. Run the Application

Once you have downloaded the build folder, installed MongoDB, and started the Express server, you can run the iNoteBook application:

1. Open a terminal or command prompt and run: npm run build.
2. Navigate to the directory where the build folder is located.
3. Serve the build folder using a static server. You can use tools like `serve` or `http-server` for this purpose.
4. Access the application in your web browser by entering the URL provided by the static server.

That's it! You can now use iNoteBook to manage your notes efficiently.
