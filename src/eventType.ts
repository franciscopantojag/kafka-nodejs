import avro from 'avsc';

export default avro.Type.forSchema({
  type: 'record',
  name: 'test',
  fields: [
    {
      name: 'category',
      type: {
        type: 'enum',
        symbols: ['CAT', 'DOG'],
        name: 'animalEnum',
      },
    },
    {
      name: 'noise',
      type: 'string',
    },
  ],
});
