import { setup } from './setup'

const http = require("http");

const healthEndpoint = "/health";

const { PORT } = process.env;
if (!PORT) {
    throw new Error("Missing env PORT");
}

setup(
  process.env.CONTRACT_ADDRESS,
  process.env.WS_URL,
  process.env.IPFS_URL
)

http.createServer((req, res) => {
    if (req.url === healthEndpoint) {
        res.writeHead(200);
        res.end();
        return;
    }

    res.writeHead(404);
    res.end();
}).listen(PORT);

console.debug(`Listening on :${PORT}`);
