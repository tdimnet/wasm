import assert from "assert";
import { add, minusOne } from "../build/debug.js";

assert.strictEqual(add(1, 2), 3);
console.log("ok");

assert.strictEqual(minusOne(3), 2);
console.log("ok");
