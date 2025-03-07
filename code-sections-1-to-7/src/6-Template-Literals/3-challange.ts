import { Equal, Expect } from "..";

/**
 * Implement a `StartsWith` generic that takes
 * 2 string literals, and returns true if the
 * first string starts with the second one.
 */
namespace startsWith {
  type StartsWith<Str, Start> = TODO;

  type res1 = StartsWith<"getUsers", "get">;
  type test1 = Expect<Equal<res1, true>>;

  type res2 = StartsWith<"getNews", "post">;
  type test2 = Expect<Equal<res2, false>>;

  type res3 = StartsWith<"Well, hello there!", "Well">;
  type test3 = Expect<Equal<res3, true>>;
}
