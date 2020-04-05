# WebStorm debugging issue with Babel and Typescript

* Open project in WebStorm
* Try put some debugging points in `TEST_debugging.ts`
* Run configuration `Run Test`.
* Notice that the breakpoints are never hit

---

The project makes use of `@babel/register` to import the TypeScript files, and `@babel/typescript` plugin which transpiles that TypeScript to regular JavaScript to be executed (simply ignores type information).
