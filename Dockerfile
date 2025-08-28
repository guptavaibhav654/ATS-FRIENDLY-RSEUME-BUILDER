# Use official Node.js base image
FROM node:18

# Install TeX Live (minimal plus extra fonts and xetex)
RUN apt-get update && \
    apt-get install -y texlive-latex-base texlive-fonts-recommended texlive-latex-extra \
                       texlive-fonts-extra texlive-xetex && \
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
