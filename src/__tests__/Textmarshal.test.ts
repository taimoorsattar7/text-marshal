import { textMarshal } from "../index";

test("textMarshal", () => {
  expect(
    textMarshal({
      input: "123456789",
      template: "xx.",
      disallowCharacters: [".", "s"],
      isRepeat: {
        value: true,
        removeStart: true,
        removeEnd: true,
      },
    })
  ).toMatchObject({
    template: "xx.xx.xx.xx.x",
    plaintext: "123456789",
    marshaltext: "12.34.56.78.9",
  });
});

test("textMarshal", () => {
  expect(
    textMarshal({
      input: "4242424242424242",
      template: "xxxx xxxx xxxx xxxx",
    })
  ).toMatchObject({
    template: "xxxx xxxx xxxx xxxx",
    plaintext: "4242424242424242",
    marshaltext: "4242 4242 4242 4242",
  });
});
