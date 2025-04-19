import { Equal, Expect } from "..";

/**
 * Type the "extractValue" function to infer its return type
 * from the object's type and the "path" string.
 */

declare function extractValue<T, S extends string>(obj: T, path: S): TODO;

// Example objects and type checks
declare const example1: { a: { b: { c: string } } };
const result1 = extractValue(example1, "a.b.c");
type check1 = Expect<Equal<typeof result1, string>>;

declare const example2: { author: { friends: [{ age: 29 }] } };
const result2 = extractValue(example2, "author.friends[0].age");
type check2 = Expect<Equal<typeof result2, 29>>;

declare const example3: { author: { friends: [undefined, { name: "James" }] } };
const result3 = extractValue(example3, "author.friends[1].name");
type check3 = Expect<Equal<typeof result3, "James">>;

declare const example4: [1, 2, [3, [{ title: "❤️" }]]];
const result4 = extractValue(example4, "[2][1][0].title");
type check4 = Expect<Equal<typeof result4, "❤️">>;
