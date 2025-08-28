# Use official Node.js base image
FROM node:18

# Install TeX Live (full installation for comprehensive support)
RUN apt-get update && \
    apt-get install -y texlive-full && \
    apt-get clean

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install node dependencies
RUN npm install

# Expose the port the app listens on
EXPOSE 3001

# Start the app
CMD ["npm", "start"]
