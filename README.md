# node-framework

# 1. Creating a node.js server

Typically to start a node.js server, type in your terminal:

``
    npm init -y
``

You can usually just use npm init if you want to manually add in the details of the package.json that would be created but for simplicity, the -y sets everything to default and you can always go back and edit the details.

# 2. Setting up this project

The setup is simple. Type in your terminal:

``
    git clone https://github.com/TheCaptainKimchi/node-framework.git
``

After cloning the project to your machine, open the project and enter in the terminal:

``
    npm i
``

This will install the dependencies for the project which are:

- cors (Not fully used in this project but good to have for future projects)
- dotenv (Allows node.js project to use variables from .env file)
- express (Allows continuous running of server)
- nodemon (Allows automatic reloads of project when saving project)

Lastly, create a .env file and add follow the .env.sample file to get all the necessary variables to setup the project.

Once all the above is setup, you can start the project by typing in your terminal:

``
    npm start
``

Typically, you would use ``node server.js`` however, the "nodemon" module allows automatic reloading of the server and is setup to start with npm start.

Note: Although the project is setup for building a scalable server, it is possible to create a node.js server without having the routes>route.js folder/file. You would essentially format the code to have the route.js file inside the server.js file performing the same tasks but would clutter your project if building a larger project. 

# 3. Project usage

To test out the project and make your own adjustments, head in to routes>route.js and view the "sample" path. The basic setup of a project that accepts a single query param and sends it back is created for this path. You may decide to accept different sorts of information and use it to create your own project. A challenge could be testing what may happen if you try to accept a variable or boolean instead of a string and see how the project responds. How may a developer proceed if there are any challenges?

Using something like "Postman" to navigate to a path (ex. http://localhost:8080/sample) may be used but you can also test navigating to the path in your browser. Try to guess what response you may receive when navigating to each path on browser and why it is received this way.

# 4. Learning

It is recommended to start with the server.js file. It is setup with the pure basics of what a node.js server may need. Once an understanding of how the setup of the server.js file initializes the server, moving on to the route>route.js file will be the next step. The initializing of the route.js file is at the beginning and end. The different paths setup in the file are interchangeable but it is worth testing out what happens if you move the catch all path as your first path and then try to send a request to one of the paths placed afterwards. (ex. catch all path first, default path second, sample path third). 

Lastly, understanding how the front end client interacts with the back end will be vital in growing as a full-stack developer. The request<->response loop is a key piece in developing full-stack applications and the essence of the back-end server is how to handle a request from a client including error handling, and sending an appropriate response back. 

# 5. Contact

If you have any questions, feel free to reach out at raulcalero7@gmail.com or if any errors/updates are spotted in the repository, don't hesitate to send a pull request.
