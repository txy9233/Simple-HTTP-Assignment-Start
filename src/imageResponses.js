const fs = require('fs');

const image = `${__dirname}/../client/spongegar.png`;

const img = fs.readFileSync(image);
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img);
  response.end();
};

module.exports.getImage = getImage;
