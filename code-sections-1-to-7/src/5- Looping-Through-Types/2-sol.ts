import { Equal, Expect } from "..";

namespace promiseAll {
  declare function all<
    // Infer `Promises` as a tuple of promises:
    Promises extends [Promise<any>, ...Promise<any>[]]
  >(promises: Promises): All<Promises>;

  // Unwrap all promises and wrap the resulting tuple type
  // in a `Promise`:
  type All<Promises> = Promise<UnwrapAll<Promises>>;

  // This is a "map" loop!
  type UnwrapAll<Promises> =
    // 1. split the list, and infer the promise's `value`:
    Promises extends [Promise<infer Value>, ...infer Rest]
      ? // 2. Add the value to the array, recurse on `Rest`:
        [Value, ...UnwrapAll<Rest>]
      : // 3. If the list is empty, return an empty list:
        [];

  // Two promises
  const res1 = all([Promise.resolve(20), Promise.resolve("Hello" as const)]);
  type expected1 = Promise<[number, "Hello"]>;
  type test1 = Expect<Equal<typeof res1, expected1>>;

  // Three promises
  const res2 = all([
    Promise.resolve(true),
    Promise.resolve("!"),
    Promise.resolve({}),
  ]);
  type expected2 = Promise<[boolean, string, {}]>;
  type test2 = Expect<Equal<typeof res2, expected2>>;

  // Five promises
  const res3 = all([
    Promise.resolve(3),
    Promise.resolve("Hello" as const),
    Promise.resolve(true),
    Promise.resolve({ key: "value" }),
    Promise.resolve(["array"]),
  ]);
  type expected3 = Promise<
    [number, "Hello", boolean, { key: string }, string[]]
  >;
  type test3 = Expect<Equal<typeof res3, expected3>>;
}
