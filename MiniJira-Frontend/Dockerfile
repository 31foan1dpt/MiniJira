#created by chatgpt :)

#Use official Node runtime
FROM node:14.20-alpine as build
#Set the working dir in the container to /app
WORKDIR /app
#copy package.json and package-lock.json (like jar in BE)
COPY package*.json /app/
#Install deps
RUN npm install
#copy current dir content into container
COPY . /app/
#Generate build of app
RUN npm run build

#IDK exactly what these does --> research
FROM nginx:1.14.1-alpine
COPY --from=build /app/dist/mini-jira-frontend/  /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]