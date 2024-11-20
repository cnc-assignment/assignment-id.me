import { screen, render } from "@testing-library/react";
import ProductTable from "../ProductTable";
import { sampleProducts } from "./data";
import axios from "axios";

jest.mock("axios");

describe("ProductTable test", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: sampleProducts, ok: true });
  });

  it("should render the ProductTable component", async () => {
    render(<ProductTable />);
    expect(await screen.findByRole("heading", { name: "Purchases" }));
  });

  it("should render desktop browser all the headers of the product table", async () => {
    const columnHeaders = [
      "Name",
      "Location",
      "Purchase Date",
      "Category",
      "Description",
      "Price",
      "",
    ];
    render(<ProductTable />);
    const tableHeaders = await screen.findAllByRole("columnheader");
    for (let th of tableHeaders) {
      const currentTh = columnHeaders.includes(th.innerHTML);
      expect(currentTh).toBe(true);
    }
  });

  it("should render all the products from the API, desktop view", async () => {
    render(<ProductTable />);
    const tableRows = await screen.findAllByRole("row");
    expect(tableRows.length).toBe(4); // 3 data rows + 1 header = 4
  });

  it("should render mobile view product cards", async () => {
    // Simulate mobile screen width
    window.innerWidth = 375;
    window.dispatchEvent(new Event("resize"));

    render(<ProductTable />);
    expect(await screen.findByRole("heading", { name: "Purchases" }));
    //additional tests can be added to check the cards in product Mobile view
  });
});
