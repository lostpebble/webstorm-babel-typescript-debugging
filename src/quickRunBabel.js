process.env.BABEL_ENV = "server-dev";
require('@babel/register')({
  rootMode: "upward",
  cwd: __dirname,
  extensions: [".js", ".jsx", ".ts", ".tsx"]
});

require('./quickRunTypescript');
