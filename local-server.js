// local-server.js
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const conf = require("./next.config");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 8087;

const app = next({ dev, ...conf });
const handler = app.getRequestHandler();

const devProxy = {
  "/account": {
    target: "http://mgr-dev-yx2.kxxai.com/",
    changeOrigin: true,
  },
};

app.prepare().then(() => {
  const server = express();

  // Set up the proxy.
  if (dev && devProxy) {
    Object.keys(devProxy).forEach((context) => {
      server.use(createProxyMiddleware(context, devProxy[context]));
    });
  }

  server.all("*", (req, res) => handler(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.info(`🚀 Ready on http://localhost:${port}`);
  });
});
