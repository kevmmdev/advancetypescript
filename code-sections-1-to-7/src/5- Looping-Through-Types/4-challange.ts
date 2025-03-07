import { Equal, Expect } from "..";

/**
 * Type lodash's `zip` function.
 * `zip` takes several arrays containing different types of
 * values, and turn them into a single array containing
 * tuples of values for each index.
 *
 * For example, `zip([1, 2], [true, false], ['a', 'b'])`
 * returns `[[1, true, 'a'], [2, false, 'b']]`.
 */
namespace zip {
  declare function zip(...arrays: TODO): TODO;

  const res1 = zip([1, 2], [true, false]);
  // => [[1, true], [2, false]]
  type test1 = Expect<Equal<typeof res1, [number, boolean][]>>;

  const res2 = zip([1, 2], [true, false], ["a", "b"]);
  // => [[1, true, 'a'], [2, false, 'b']]
  type test2 = Expect<Equal<typeof res2, [number, boolean, string][]>>;

  const res3 = zip([1, 2, null], [true, false, undefined]);
  // => [[1, true], [2, false], [null, undefined]]
  type test3 = Expect<
    Equal<typeof res3, [number | null, boolean | undefined][]>
  >;
}
