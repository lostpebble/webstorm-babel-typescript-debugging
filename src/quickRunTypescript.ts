import { TEST_debuggingNotAsync } from "./TEST_debugging";

const stayingAlive = ["♪ ah", "♪ ah", "♪ ah", "♪ ah", "♫ staying alive ♫", "♫ staying alive ♫"];

TEST_debuggingNotAsync();

/*
async function run() {
  console.log(`
Quick running code
==================
`);

  console.time(`Runtime`);
  try {
    const response = TEST_debuggingNotAsync();
    console.log(response);
  } catch (e) {
    console.error(`Something went wrong while running quick code: ${e.message}`);
    console.error(e);
    console.log(e.stack);
    console.log({ ...e });
  }
  console.timeEnd(`Runtime`);

  console.log(`
==============
Quick run FIN.`);

  let count = 0;
}

run();
*/
