import fs from 'fs';
import path from 'path';

const add = (a: number, b: number) => a + b;

console.log(add(4, 4));
console.log(fs.readFileSync(path.join(__dirname, 'test.json'), { encoding: 'utf-8' }));
