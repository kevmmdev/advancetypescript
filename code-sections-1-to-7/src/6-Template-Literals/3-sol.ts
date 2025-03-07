import { Equal, Expect } from "..";

namespace startsWith {
  type StartsWith<
    Str extends string,
    Start extends string
  > = Str extends `${Start}${string}` ? true : false;

  type res1 = StartsWith<"getUsers", "get">;
  type test1 = Expect<Equal<res1, true>>;

  type res2 = StartsWith<"getNews", "post">;
  type test2 = Expect<Equal<res2, false>>;

  type res3 = StartsWith<"Well, hello there!", "Well">;
  type test3 = Expect<Equal<res3, true>>;
}
