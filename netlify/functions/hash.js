const crypto = require('crypto');

exports.handler = async (event) => {
  const { input } = JSON.parse(event.body || '{}');
  const hash = crypto.createHash('sha256').update(input).digest('hex');

  return {
    statusCode: 200,
    body: JSON.stringify({ token: hash }),
  };
};
