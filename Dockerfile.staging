FROM node:latest
RUN apt-get update && \
    apt-get install -y awscli

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

RUN aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID && \
    aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY && \
    aws configure set default.region us-west-2

WORKDIR /app/

COPY ./package.json /app/
COPY ./frontend/package.json /app/frontend/

RUN npm install

COPY . /app/

WORKDIR /app/frontend/

RUN npm install

WORKDIR /app/

CMD ["npm", "run", "deploy-staging"]
