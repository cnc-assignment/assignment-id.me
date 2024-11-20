import { handleAxiosError } from "../httpUtil";

describe("Test for http Util", () => {
  it("should return correct message for axios error response", () => {
    const expected = "There is an error error: server error";
    const errorResponse = handleAxiosError({
      response: {
        status: "error",
        data: { message: "server error" },
      },
    });
    expect(errorResponse).toBe(expected);
  });

  it("should return correct message for axios error request", () => {
    const expected = "Response not received, verify your internet.";
    const errorRequest = handleAxiosError({
      request: {
        status: "error",
        data: { message: "server error" },
      },
    });
    expect(errorRequest).toBe(expected);
  });

  it("should unknown error message", () => {
    const expected = "Data fetching failed: unexpected error";
    const errorRequest = handleAxiosError({
      message: "unexpected error",
    });
    expect(errorRequest).toBe(expected);
  });
});
