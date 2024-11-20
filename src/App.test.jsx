import { render, screen, act } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

it("renders the app initial loading state", async () => {
  axios.get.mockResolvedValue({ data: [], ok: true });

  render(<App />);

  const loadingText = await screen.findByText(/Data loading wait ...../i);
  expect(loadingText).toBeInTheDocument();
});
