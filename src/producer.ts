import Kafka from 'node-rdkafka';
import eventType from './eventType';

const stream = Kafka.Producer.createWriteStream(
  {
    'metadata.broker.list': 'localhost:9092',
  },
  {},
  { topic: 'test' },
);

const queueMessage = () => {
  const record = eventType.toBuffer({
    category: 'DOG',
    noise: 'bark',
  });
  const stringifiedRecord = Buffer.from(
    JSON.stringify(
      {
        category: 'CAT',
        noise: 'Jason',
      },
      null,
      2,
    ),
  );
  const result = stream.write(record);
  const result2 = stream.write(stringifiedRecord);
  if (result) console.log('message wrote successfully to stream');
  else console.log('something went wrong');
  if (result2) console.log('message2 wrote successfully to stream');
  else console.log('something went wrong with message 2');
  console.log(result);
};

setInterval(() => {
  queueMessage();
}, 3000);
