import { render, screen } from "@testing-library/react";
import CategoryBadge from "../CategoryBadge";

describe("Test Category Badge", () => {
  it("should render appropriate badge with color class", () => {
    const { container } = render(<CategoryBadge category="Automotive" />);
    expect(screen.getByText("Automotive")).toBeInTheDocument();
    expect(
      container.querySelector(".product-category.Automotive")
    ).toBeInTheDocument();
  });

  it("should render appropriate default badge with default class", () => {
    const { container } = render(<CategoryBadge />);
    expect(
      container.querySelector(".product-category.default")
    ).toBeInTheDocument();
  });
});
