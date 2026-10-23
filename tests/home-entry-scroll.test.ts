import { describe, expect, test } from "bun:test";
import { shouldResetHomeEntry } from "../src/lib/home-entry-scroll";

describe("homepage entry scroll policy", () => {
  test("initial homepage visits start at the top", () => {
    expect(shouldResetHomeEntry("/", "", "navigate")).toBe(true);
  });
  test("homepage refresh starts at the top", () => {
    expect(shouldResetHomeEntry("/", "", "reload")).toBe(true);
  });
  test("browser history traversal keeps saved scroll", () => {
    expect(shouldResetHomeEntry("/", "", "back_forward")).toBe(false);
  });
  test("other pages keep their entry restoration", () => {
    expect(shouldResetHomeEntry("/about", "", "reload")).toBe(false);
  });
  test("explicit homepage anchors retain anchor scrolling", () => {
    expect(shouldResetHomeEntry("/", "#quality", "navigate")).toBe(false);
  });
});
