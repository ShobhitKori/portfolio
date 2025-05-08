# Using Node 18 base img 
FROM node:18

# app dir
WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "run", "dev"]