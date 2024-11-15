import sayHello from "@try-bun/helpers";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log(`Hello SERVER and ${sayHello()}!`)