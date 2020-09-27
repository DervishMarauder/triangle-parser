#base image
FROM node
WORKDIR /app
COPY package.json /app

#install and cache app dependencies
RUN npm install

COPY . /app

#start app
CMD ["npm", "start"]