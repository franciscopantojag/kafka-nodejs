import Kafka from 'node-rdkafka';
import eventType from './eventType';

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
    if (!data.value) {
      console.log('something went wrong');
      return;
    }
    try {
      const record = eventType.fromBuffer(data.value);
      console.log(`received message: ${record}`);
      return;
    } catch (err) {
      const record = JSON.parse(data.value.toString());
      console.log('received message');
      console.log(record);
      return;
    }
  });
