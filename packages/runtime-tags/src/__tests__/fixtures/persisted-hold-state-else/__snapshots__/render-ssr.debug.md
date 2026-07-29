# Render `{"a":"alpha v1","b":"beta v1","$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="a"
>
  alpha v1
</p>
```

# Update `{"a":"alpha v1","b":"beta v1","$global":{"persisted":true}}`

# Update
```js
document.querySelector("button.b").click();
```
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="b"
>
  beta v1
</p>
```
## Change
```
INSERT: button:nth-of-type(2) + p
REMOVE: p + .a
UPDATE: p::text " " => "beta v1"
```

# Update
```js
assert.equal(document.querySelector("p.a"), null);
assert.equal(document.querySelector("p.b")?.textContent, "beta v1");
```

# Update update frame 1 of 2

# Update `{"a":"alpha v2","b":"beta v1","$global":{"persisted":true}}`

# Update
```js
assert.equal(document.querySelector("p.a"), null, "else stays shown");
assert.equal(
  document.querySelector("p.b")?.textContent,
  "beta v1",
  "visible branch must not take the hidden branch's fills",
);
```

# Update
```js
document.querySelector("button.a").click();
```
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="a"
>
  alpha v2
</p>
```
## Change
```
INSERT: .b + p
REMOVE: p + .b
UPDATE: p::text " " => "alpha v2"
```

# Update
```js
assert.equal(
document.querySelector("p.a")?.textContent,
"alpha v2",
"re-entered branch shows the patched value",
  );
  assert.equal(document.querySelector("p.b"), null);
```

# Update update frame 1 of 2

# Update `{"a":"alpha v3","b":"beta v1","$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="a"
>
  alpha v3
</p>
```
## Change
```
UPDATE: p::text "alpha v2" => "alpha v3"
```

# Update
```js
assert.equal(
document.querySelector("p.a")?.textContent,
"alpha v3",
"visible branch takes later patches",
  );
```

# Update
```js
document.querySelector("button.b").click();
```
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="b"
>
  beta v1
</p>
```
## Change
```
INSERT: button:nth-of-type(2) + p
REMOVE: p + .a
UPDATE: p::text " " => "beta v1"
```

# Update update frame 1 of 2

# Update `{"a":"alpha v2","b":"beta v2","$global":{"persisted":true}}`
```html
<button
  class="a"
>
  A
</button>
<button
  class="b"
>
  B
</button>
<p
  class="b"
>
  beta v2
</p>
```
## Change
```
UPDATE: p::text "beta v1" => "beta v2"
```

# Update
```js
assert.equal(document.querySelector("p.b")?.textContent, "beta v2");
```
