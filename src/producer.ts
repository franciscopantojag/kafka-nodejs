import Kafka from 'node-rdkafka';

const stream = Kafka.Producer.createWriteStream(
  {
    'metadata.broker.list': 'localhost:9092',
  },
  {},
  { topic: 'test' },
);

const queueMessage = () => {
  const result = stream.write(Buffer.from('hi'));
  if (result) console.log('message wrote successfully to stream');
  else console.log('something went wrong');
  console.log(result);
};

setInterval(() => {
  queueMessage();
}, 3000);
