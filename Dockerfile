# IMPORTANT --------------------------------------------------------------------------
# THIS IS THE API_SERVER_APPLICATION DOCKERFILE FILE
# IT HAS TO BE IN THE SAME DIRECTORY AS THE ./package.json IS
FROM node:16.17.0

# CREATING THE FOLDER THAT WE WANT TO USE
RUN mkdir -p /usr/src/api_app
# SETTING THE FOLDER TO WORK WITHIN
WORKDIR /usr/src/api_app

# COPYING THE FILE TO INSTALL MODULES
# ./ => it means WORKDIR (the path we defined above)
COPY ./package.json ./
COPY ./package-lock.json ./

# installing all dependencies from scratch so they will work with that specific container
RUN npm install
# COPY from ./ (real current dir) to ./ (container's WORKDIR)
COPY ./ ./

CMD ["npm", "run", "start"]