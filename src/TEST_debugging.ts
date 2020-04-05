export async function TEST_debugging() {
  const something = "12312312";

  console.log(something);

  return "TEST ASYNC RUN";
}

export function TEST_debuggingNotAsync() {
  const something = "12312312";

  console.log(something);

  return "TEST ASYNC RUN - NOT ASYNC";
}
