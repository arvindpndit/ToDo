# Todo Application

This is a simple Todo Application that allows users to manage their tasks or todos.

![Todo Application Banner](/pictures/todo.png)

## Features

- Add a new todo with a title and content
- View the list of existing todos
- Delete a todo from the list

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API

## Setup and Usage

1. Clone the repository or download the source code.
2. Start the server by running the following command in your terminal:

   ```bash
   node todo.js
   ```

   The server will start running on `http://localhost:3000`.

3. Open the `index.html` file in a web browser.
4. The Todo Application will be displayed in the browser.
5. Enter a title and content for a new todo in the provided input fields.
6. Click the "Add ToDo" button to add the todo to the list.
7. The added todo will appear in the list of todos.
8. To delete a todo, click the "Delete" button next to the todo item.
9. The todo will be removed from the list.

## API Integration

This application interacts with a backend API to store and retrieve todos. The API endpoints used are:

- `GET /todos` - Retrieve the list of todos
- `POST /todos` - Add a new todo
- `DELETE /todos/{id}` - Delete a specific todo

Make sure to replace the API endpoint URLs in the JavaScript code with the actual endpoints provided by your backend server.

## Credits

This Todo Application is developed by Me. It is created as a learning project given by 100xDevs.
