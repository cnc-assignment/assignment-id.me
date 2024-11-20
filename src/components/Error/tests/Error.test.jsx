import Error from "../Error";
import { render, screen } from "@testing-library/react";

describe("Error component test", () => {
  it("should render error message", () => {
    render(<Error errorMessage="some error" />);
    expect(screen.getByText(/some error/)).toBeInTheDocument();
  });
});
