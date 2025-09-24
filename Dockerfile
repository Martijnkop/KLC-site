# Use the latest LTS version of Node.js
FROM node:22-alpine
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
RUN npm i -g serve
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
RUN npm run build
EXPOSE 4173
 
# Define the command to run your app
CMD ["serve", "-s", "dist"]