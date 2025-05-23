const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("00:00 should be midnight", () => {
    expect(timeWord("00:00")).toBe("midnight");
  });

  test("00:12 should be twelve twelve am", () => {
    expect(timeWord("00:12")).toBe("twelve twelve am");
  });

  test("01:00 should be one o'clock am", () => {
    expect(timeWord("01:00")).toBe("one o'clock am");
  });

  test("06:01 should be six oh one am", () => {
    expect(timeWord("06:01")).toBe("six oh one am");
  });

  test("06:10 should be six ten am", () => {
    expect(timeWord("06:10")).toBe("six ten am");
  });

  test("06:18 should be six eighteen am", () => {
    expect(timeWord("06:18")).toBe("six eighteen am");
  });

  test("06:30 should be six thirty am", () => {
    expect(timeWord("06:30")).toBe("six thirty am");
  });

  test("10:34 should be ten thirty four am", () => {
    expect(timeWord("10:34")).toBe("ten thirty four am");
  });

  test("12:00 should be noon", () => {
    expect(timeWord("12:00")).toBe("noon");
  });

  test("12:09 should be twelve oh nine pm", () => {
    expect(timeWord("12:09")).toBe("twelve oh nine pm");
  });

  test("23:23 should be eleven twenty three pm", () => {
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
});
