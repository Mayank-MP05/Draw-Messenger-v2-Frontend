# Draw Messenger Frontend →

This is a front-end project for a chatting application with text/drawings chat feature, built using React and Socket.IO client. The application allows users to communicate with each other by sending text messages and also provides a drawing canvas where users can collaborate by drawing together in real-time.

## Features

- Real-time text messaging: Users can send and receive text messages in real-time.
- Drawing canvas: Users can collaborate and draw together on a shared canvas.
- Multiple users: The application supports multiple users and allows them to chat and draw simultaneously.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Socket.IO client: A JavaScript library that enables real-time, bidirectional communication between the browser and the server.

## Feature Screenshots

##### Landing Page
![Landing Page](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/landing-page.png?raw=true)

##### Chat Features
![Chat Features](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/chat-features.png?raw=true)

##### Chat View
![Chat View](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/chat-view.png?raw=true)

##### Drawing Board Feature
![Drawing Board Feature](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/drawing-board-feature.png?raw=true)

##### Landing Page
![Landing Page](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/landing-page.png?raw=true)

##### Post Login Group List View
![Post Login Group List View](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/post-login-group-list-view.png?raw=true)

##### Types of Messages
![Types of Messages](https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend/blob/master/docs/types-of-messages.png?raw=true)

## Prerequisites

Before running this application, ensure that you have the following software installed on your machine:

- Node.js: Version 14 or above.
- npm: Package manager for Node.js.

## Getting Started

Follow these steps to run the application on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/Mayank-MP05/Draw-Messenger-v2-Frontend.git
```

2. Navigate to the project directory:

```bash
cd Draw-Messenger-v2-Frontend
```

3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

5. The application should now be running on http://localhost:3000. Open this URL in your web browser.

## Configuration

The application requires a WebSocket server to handle the real-time communication. By default, it assumes the server is running at http://localhost:9001. If your server is running on a different address or port, you can modify the configuration in the .env file.

## Usage

- Open the application in your web browser.
- Use the signin with google option to login to the application.
- Type a message in the input box and press Enter to send a text message.
- Click on the drawing canvas tab to switch to the drawing mode.
- Use the drawing tools to draw on the canvas. Your drawings will be visible to other users in real-time.

## Acknowledgements
- React - A JavaScript library for building user interfaces.
- Socket.IO - A JavaScript library for real-time, bidirectional communication.
- React-Canvas-Drawing - A React component for drawing on a canvas.
Thank you for using our chatting app! We hope you have a great experience.
