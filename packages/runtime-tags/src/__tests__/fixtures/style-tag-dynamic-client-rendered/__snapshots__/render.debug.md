# Render `{"color":"red","$global":{"cspNonce":"n1","serializedGlobals":{"cspNonce":true}}}`
```html
<button>
  show
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  show
</button>
<div
  class="content"
>
  Hello
</div>
```
## Change
```
INSERT: button + :is(.cM_0, .content)
INSERT: .cM_0::text("--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0:red;}")
UPDATE: .cM_0[class] null => "cM_0"
REMOVE: .cM_0::text("--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0:red;}")
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
LOG undefined [ 'n1' ]
```
