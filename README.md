# Text Marshal

[![npm version](https://img.shields.io/npm/v/text-marshal.svg?style=flat-square)](https://www.npmjs.com/package/text-marshal)

Text Marshal is used to format text according to the assigned patterns.

- [Features](#features)
- [Install and use the package](#install-and-use-the-package)
- [Resources](#resources)
- [License](#license)

## Features

The main purpose of the package is to pattern format the input text while typing (in real-time). The key features for this package is listed below

- Text format itself as per the assigned pattern e.g. date format, card format, etc
- Define Infinite text pattern
- Disallow Character

## Install

We can install the package by executing the below command in the terminal:

```
> npm i text-marshal
```

## Package usage

To use this package, we can import it as below

```js
import { textMarshal } from "text-marshal";
```

To get started, we can write the `textMarshal` function as below.

```js
console.log(
  textMarshal({
    input: "4242424242424242",
    template: "xxxx xxxx xxxx xxxx",
  })
);
```

The above code output in the browser as below:

```js
// output:
{
 template: "xxxx xxxx xxxx xxxx",
 plaintext: "4242424242424242",
 marshaltext: "4242 4242 4242 4242"
}
```

The `textMarshal` function accepts JSON objects as input. In the JSON object, we have the option to pass the following parameters:

- `input`: It is the user's input text that we need to format.
- `template`: It is the defined pattern that the input text needs to match
- `disallowCharacters`: It is an array of characters that should be disallowed from the output text
- `isRepeat.value`: Bool that triggers the infinite pattern
- `isRepeat.removeStart`: Remove the start character e.g. space, dot, etc
- `isRepeat.removeEnd`: Remove the end character e.g. space, dot, etc

The output of the `textMarshal` function is the JSON object. The JSON object output the parameters as below

- `template`: It defines the text pattern of the output `marshaltext`.
- `plaintext`: It is the text without formating.
- `marshaltext`: The format text output of the input text.

With the `textMarshal` function, we can also define the infinite patterns. To understand it, we can write the below code.

```js
console.log(
  textMarshal({
    input: "1.s23456789",
    template: "xx.",
    disallowCharacters: [".", "s"],
    isRepeat: {
      value: true,
      removeStart: true,
      removeEnd: true,
    },
  })
);
```

The output of the above code is shown below:

```js
// output:
{
 template: "xx.xx.xx.xx.x",
 plaintext: "123456789",
 marshaltext: "12.34.56.78.9"
}
```

You can use this plugin to auto-format the input text while typing. For that, we can define the Card Number input in HTML as below.

```html
<div class="input">
  <label for="cardnumber">Enter Card Number</label>

  <input
    class="headline headline__text"
    type="text"
    id="cardnumber"
    name="cardnumber"
    data-pattern="xxxx xxxx xxxx xxxx"
  />
</div>
```

By using the `textMarshal` function, we can automatically format the input text to match the assigned pattern.

```js
const cardnumber = document.getElementById("cardnumber");

cardnumber.oninput = function (e) {
  let data = textMarshal({
    input: e.target.value,
    template: cardnumber.getAttribute("data-pattern"),
    disallowCharacters: [/[a-z]/],
  });

  cardnumber.value = data.marshaltext;
};
```

## Resources

- [Get Started With JavaScript](https://taimoorsattar.com/blogs/javascript)
- [How To Create An HTML Form](https://taimoorsattar.com/blogs/create-html-form)

## License

Text Marshal is licensed under the MIT license
