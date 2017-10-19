FROM node:8.1

# Copy package.json file to docker image.
COPY package.json /app/
COPY package-lock.json /app/
COPY ./pages /app/pages
COPY ./next.config.js /app/

# Define working directory.
WORKDIR /app

# Install node files on docker image.
RUN npm install --production

CMD npm run dev

# Expose port
EXPOSE 3000
