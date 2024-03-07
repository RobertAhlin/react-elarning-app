// components/DatabaseEntryCount.test.js

import fs from 'fs';

describe('Card', () => {
  test('has correct number of entries for each category', () => {
    const database = JSON.parse(fs.readFileSync('./db/database.json', 'utf8'));
    expect(database['Introduktion till säkerhetsskydd']).toHaveLength(6);
    expect(database['Personalsäkerhet']).toHaveLength(11);
    expect(database['Säkerhetsskyddsplanering']).toHaveLength(15);
  });
});
