import { setCharAt, letterCount, isCharExist } from "./helper";

function textMarshal({
  input = "",
  template = "",
  disallowCharacters = [],
  isRepeat: { value, removeStart, removeEnd } = {
    value: false,
    removeStart: false,
    removeEnd: false,
  },
}: any): {
  template: string;
  plaintext: string;
  marshaltext: string;
} {
  try {
    template = template.toLowerCase();

    if (value == true && input.length > letterCount(template, "x")) {
      template = template.repeat(
        Math.ceil(input.length / letterCount(template, "x"))
      );
    }

    if (removeEnd && template[0] !== "x") {
      template = setCharAt(template, 0, "");
    }

    if (removeStart && template[template.length - 1] !== "x") {
      template = setCharAt(template, template.length - 1, "");
    }

    let templateclone = template;

    let j = 0;
    let plaintext = "";
    let countj = 0;
    while (j < template.length) {
      // code block to be

      if (countj > input.length - 1) {
        template = template.substring(0, j);
        templateclone = templateclone.substring(0, j);
        break;
      }

      if (template[j] == input[j]) {
        j++;
        countj++;
        continue;
      }

      if (
        disallowCharacters &&
        isCharExist(input[countj], disallowCharacters)
      ) {
        countj++;
        continue;
      }

      if (template[j] == "x") {
        template = setCharAt(template, j, input[countj]);
        plaintext = plaintext + input[countj];
        countj++;
      }
      j++;
    }

    return {
      template: templateclone,
      plaintext: plaintext,
      marshaltext: template,
    };
  } catch {
    return {
      template: "",
      plaintext: "",
      marshaltext: "",
    };
  }
}

export { textMarshal };
