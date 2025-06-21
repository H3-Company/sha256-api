const crypto = require("crypto");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const input = body.input;
  const hash = crypto.createHash("sha256").update(input).digest("hex");

  return {
    statusCode: 200,
    body: JSON.stringify({ hash }),
  };
};
