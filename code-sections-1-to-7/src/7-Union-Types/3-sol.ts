import { Equal, Expect } from "..";

namespace toState {
  type Status = "loading" | "success" | "error";

  type ToStates<S> = S extends unknown
    ? /*                 👆 Distribute `S`

                   Compute properties 👇              */
      {
        status: S;
        isLoading: S extends "loading" ? true : false;
        data: S extends "success" ? string : undefined;
        error: S extends "error" ? Error : null;
      }
    : never;

  /**
   * Test helpers, do not use in your solution!
   */
  type LoadingState = {
    status: "loading";
    isLoading: true;
    data: undefined;
    error: null;
  };

  type SuccessState = {
    status: "success";
    isLoading: false;
    data: string;
    error: null;
  };

  type ErrorState = {
    status: "error";
    isLoading: false;
    data: undefined;
    error: Error;
  };

  type res1 = ToStates<"error">;
  type test1 = Expect<Equal<res1, ErrorState>>;

  type res2 = ToStates<"loading" | "success">;
  type test2 = Expect<Equal<res2, LoadingState | SuccessState>>;

  type res3 = ToStates<"success" | "error">;
  type test3 = Expect<Equal<res3, SuccessState | ErrorState>>;

  type res4 = ToStates<"loading" | "success" | "error">;
  type test4 = Expect<Equal<res4, LoadingState | SuccessState | ErrorState>>;
}
