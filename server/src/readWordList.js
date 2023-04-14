import { readFileSync } from 'fs';

const filePath = 'src/words.json';
const words = JSON.parse(readFileSync(filePath));

export default words;