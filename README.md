# kafka-nodejs

Based on this [youtube tutorial](https://www.youtube.com/watch?v=EiDLKECLcZw&t=1200s) from Kris Foster.
A kafka producer/consumer system using Node.js

## Requisites

- Node.js
- Docker

## Run

1. Install the dependencies

```sh
   npm install
```

2. Run kafka locally using docker

```sh
  docker-compose up
```

3. Create a topic

```sh
   ./src/scripts/create-topic.sh
```

4. Starts the producer

```sh
   npm run start:producer
```

5. Starts the consumer

```sh
   npm run start:consumer
```
