---
layout: til
slug: "detect-system-color-scheme-appearance"
title: "Detect if the system prefers dark / light mode"
date: 2020-08-23
---

There exists a CSS media feature called `prefers-color-scheme` that lets you detect if the user prefers a dark / light mode on their system.

### Turn on Dark Mode (macOS):

on ios and macOS, you can toggle these settings via: <br />
`Settings > Appearance`

### Usage:

##### Light Mode:

```
@media (prefers-color-scheme: light) {}
```

##### Dark Mode:

```
@media (prefers-color-scheme: dark) {}
```

##### via JavaScript:

```
function checkDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
```

### Example:

```html
<html>
  <style>
    body {
      background: white;
    }

    h1 {
      color: black;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: black;
      }

      h1 {
        color: white;
      }
    }
  </style>

  <body>
    <h1>prefers-color-scheme</h1>
  </body>
</html>
```

#### Additional Resources:

- [prefers-color-scheme on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Tailwind CSS dark mode](https://github.com/ChanceArthur/tailwindcss-dark-mode/blob/master/prefers-dark.js)
