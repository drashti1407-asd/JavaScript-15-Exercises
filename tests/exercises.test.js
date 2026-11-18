import test from "node:test";
import assert from "node:assert";

import { square } from "../exercises/02-functions.js";
import { add } from "../exercises/03-arrow-functions.js";
import { multiply } from "../exercises/14-export-module.js";

// Test Exercise 2: Square Function
test("Exercise 2: Square of a number", () => {
    assert.strictEqual(square(5), 25);
    assert.strictEqual(square(10), 100);
});

// Test Exercise 3: Addition Function
test("Exercise 3: Add two numbers", () => {
    assert.strictEqual(add(10, 20), 30);
    assert.strictEqual(add(5, 15), 20);
});

// Test Exercise 14: Multiplication Function
test("Exercise 14: Multiply two numbers", () => {
    assert.strictEqual(multiply(5, 4), 20);
    assert.strictEqual(multiply(10, 3), 30);
});

// Test Exercise 15: Import Module
test("Exercise 15: Imported multiplication function", async () => {
    const module = await import("../exercises/15-import-module.js");

    assert.strictEqual(multiply(6, 7), 42);
});