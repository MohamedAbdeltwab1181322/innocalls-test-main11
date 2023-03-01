FROM node:16
WORKDIR /app
RUN adduser app
COPY application/ .
RUN npm install \
    npm install --save pm2
RUN chown app /app/*
USER app
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]