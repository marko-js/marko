# Render `{"media":"screen","src":"y.css","$global":{"cspNonce":"n1","serializedGlobals":{"cspNonce":true}}}`
```html
<main>
  <button>
    show
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    show
  </button>
</main>
```
## Change
```
INSERT: main > button + :is(style, style, style, style)
UPDATE: main > style[media] null => "screen"
UPDATE: main > style[media] null => "screen"
UPDATE: main > style[media] null => "screen"
UPDATE: main > style[src] null => "y.css"
UPDATE: main > style[nonce] null => "n1"
INSERT: main > style::text("main { --a: 1 }")
INSERT: main > style::text("main { --b: 1 }")
INSERT: main > style::text("main { --c: 1 }")
INSERT: main > style::text("main { --d: 1 }")
```

# Update
```js
const window = document.defaultView;
window.console.log(
  (window).ran,
  Array.from(document.querySelectorAll("style"), (style) => style.nonce),
);
```
## Console
```
LOG undefined [ 'n1', 'n1', 'n1', 'n1' ]
```

# Update
```js
document.defaultView.console.log(
Array.from(
  document.querySelectorAll("style[src]"),
  (style) => style.outerHTML,
),
  );
```
## Console
```
LOG [
  '<style src="x.css" nonce="n1" media="screen">main { --c: 1 }</style>',
  '<style nonce="n1" media="screen" src="y.css">main { --d: 1 }</style>'
]
```
