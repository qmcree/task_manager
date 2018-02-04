# Base Dockerfile - https://github.com/nodejs/docker-node/blob/994f8286cb0efc92578902d5fd11182f63a59869/8/Dockerfile
FROM node:8.9.4

# Create the source code directory.
ARG SOURCE_DIR=/usr/src/app/
RUN mkdir -p ${SOURCE_DIR}
WORKDIR ${SOURCE_DIR}

# Add the source code. If sharing code via volume, the code added at image build time is not used.
COPY . .

# Install Yarn package manager.
RUN npm install --global yarn

# Install Node modules via Yarn.
RUN yarn install

# Run the NPM script defined in the package.json to serve the application over port 80.
CMD yarn start
EXPOSE 80