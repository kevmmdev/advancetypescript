import { Equal, Expect } from "..";

/**
 * ❕❕❕ You are not allowed to use `Equal`!
 */
namespace isNever {
  type IsNever<T> = TODO;

  type res1 = IsNever<never>;
  type test1 = Expect<Equal<res1, true>>;

  type res2 = IsNever<"not never">;
  type test2 = Expect<Equal<res2, false>>;

  type res3 = IsNever<1 | 2 | never>;
  type test3 = Expect<Equal<res3, false>>;
}
