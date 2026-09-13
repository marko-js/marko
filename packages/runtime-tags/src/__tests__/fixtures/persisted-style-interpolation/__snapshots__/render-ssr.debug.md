# Render `{"color":"red} :root { display: none } </style><script>alert(1)</script>"}`
```html
<div
  class="box"
>
  Hi
</div>
```

# Update
```js
const text = document.querySelector("style").textContent;
assert.equal(
  text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
  expected,
);
```

# Update `{"color":"red/* ("}`
```html
<div
  class="box"
>
  Hi
</div>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:red\\} :root \\7B  display: none \\} \\3C /style\\>\\3C script\\>alert(1)\\3C /script\\>;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:red\\/* ();}")
```

# Update
```js
const text = document.querySelector("style").textContent;
assert.equal(
  text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
  expected,
);
```

# Update `{"color":"red; background: blue"}`
```html
<div
  class="box"
>
  Hi
</div>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:red\\/* ();}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:red\\3B  background: blue;}")
```

# Update
```js
const text = document.querySelector("style").textContent;
assert.equal(
  text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
  expected,
);
```

# Update `{"color":"green\\"}`
```html
<div
  class="box"
>
  Hi
</div>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:red\\3B  background: blue;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:green\\\\;}")
```

# Update
```js
const text = document.querySelector("style").textContent;
assert.equal(
  text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
  expected,
);
```

# Update `{"color":"green"}`
```html
<div
  class="box"
>
  Hi
</div>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:green\\\\;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:green;}")
```

# Update
```js
const text = document.querySelector("style").textContent;
assert.equal(
  text.slice(text.indexOf("{")).replace(/--[^:]+:/, "--x:"),
  expected,
);
```
