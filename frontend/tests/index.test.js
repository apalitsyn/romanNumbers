import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Page", () => {
  let csvFile;
  let csvContent;

  beforeEach(() => {
    csvFile = new File(["Test file"], 'AAPL.csv', { type: 'text/csv' });
  });

  it("Renders page", () => {
    render(<Home />);
    
    expect(screen.getByTestId("h1_header")).toBeInTheDocument();
    expect(screen.getByTestId("ConvertNumberForm")).toBeInTheDocument();
  });
});
