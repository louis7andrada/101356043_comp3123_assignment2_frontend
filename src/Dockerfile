# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# The port that your app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
