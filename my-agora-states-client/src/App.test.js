import { render } from "@testing-library/react";
// import
import App from "./App";

describe("Vercel 테스트용", () => {
  test("My Agora States 텍스트 노드가 있다.", () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/^My Agora States$/)).toBeTruthy();
  });
});
