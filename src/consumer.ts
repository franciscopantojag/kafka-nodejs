import Kafka from 'node-rdkafka';

const consumer = new Kafka.KafkaConsumer(
  {
    'metadata.broker.list': 'localhost:9092',
    'group.id': 'kafka',
  },
  {},
);

consumer.connect();

consumer
  .on('ready', () => {
    console.log('consumer ready');
    consumer.subscribe(['test']);
    consumer.consume();
  })
  .on('data', (data) => {
    console.log(`received message: ${data.value}`);
  });
