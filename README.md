# CRUD Application with Node.js, Express, MongoDB, and EJS

This is a simple CRUD (Create, Read, Update, Delete) web application built with Node.js, Express, MongoDB, and EJS templating engine. The application allows users to add, view, update, and delete items from a MongoDB database.

## Features

- Add new items
- View all items
- Update existing items
- Delete items
- Search items

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/) (Community Server)

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Asad-Iqbal407/crud-website.git
   cd crud-app
Install dependencies:

bash
Copy code
npm install
Start MongoDB:

Ensure MongoDB is running on your local machine. You can start MongoDB using the following command:

bash
Copy code
mongod
Start the application:

bash
Copy code
node server.js
The application will be running on http://localhost:3000.

Project Structure
php
Copy code
crud-website/
│
├── models/
│   └── Item.js           # Mongoose model for Item
│
├── public/
│   └── css/
│       └── styles.css    # Custom CSS styles
│
├── views/
│   ├── index.ejs         # Main view to list items
│   ├── add.ejs           # View to add a new item
│   ├── edit.ejs          # View to edit an item
│   └── partials/
│       └── header.ejs    # Header partial
│
├── .gitignore            # Git ignore file
├── package.json          # Node.js package configuration
└── server.js             # Express server setup
Usage
Home Page:

Displays a list of all items in the database.
Provides a search bar to filter items.
Add New Item:

Click the "+ New" button on the home page.
Fill out the form and submit to add a new item.
Edit Item:

Click the "Edit" button next to an item on the home page.
Update the item details in the form and submit.
Delete Item:

Click the "Delete" button next to an item on the home page to remove the item from the database.
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/fooBar).
Commit your changes (git commit -am 'Add some fooBar').
Push to the branch (git push origin feature/fooBar).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

less
Copy code

### Adding the README to Your GitHub Repository

1. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com) and create a new repository.

2. **Push your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/crud-app.git
   git branch -M main
   git push -u origin main
Add the README file:
Create a README.md file in your project directory and paste the content above. Then commit and push the changes:

bash
Copy code
git add README.md
git commit -m "Add README file"
git push
