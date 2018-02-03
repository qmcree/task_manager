# qmcree/task_manager_ui
# Base Dockerfile - https://github.com/nodejs/docker-node/blob/df8782dfddf8c70663f0a7d19942120b1d6977a5/9/Dockerfile
FROM node:9.4

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
CMD yarn run start
EXPOSE 80