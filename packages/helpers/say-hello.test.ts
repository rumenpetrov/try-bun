import { expect, test } from "bun:test";
import sayHello from "./say-hello";

test("sayHello output", () => {
  expect(sayHello()).toBe("Hello from the helpers packages!");
});