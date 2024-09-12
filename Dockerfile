# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to start the app
CMD ["node", "app.js"]
