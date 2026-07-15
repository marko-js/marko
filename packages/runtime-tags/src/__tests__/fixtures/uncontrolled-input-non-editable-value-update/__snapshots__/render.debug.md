# Render
```html
<form>
  <input
    name="button"
    type="button"
    value="a"
  />
  <input
    name="checkbox"
    type="checkbox"
    value="a"
  />
  <input
    name="hidden"
    type="hidden"
    value="a"
  />
  <input
    name="image"
    type="image"
    value="a"
  />
  <input
    name="radio"
    type="radio"
    value="a"
  />
  <input
    name="reset"
    type="reset"
    value="a"
  />
  <input
    name="submit"
    type="submit"
    value="a"
  />
</form>
<button>
  Update
</button>
<button>
  Remove
</button>
```

# Update
```js
container.querySelectorAll("button")[0].click();
```
```html
<form>
  <input
    name="button"
    type="button"
    value="b"
  />
  <input
    name="checkbox"
    type="checkbox"
    value="b"
  />
  <input
    name="hidden"
    type="hidden"
    value="b"
  />
  <input
    name="image"
    type="image"
    value="b"
  />
  <input
    name="radio"
    type="radio"
    value="b"
  />
  <input
    name="reset"
    type="reset"
    value="b"
  />
  <input
    name="submit"
    type="submit"
    value="b"
  />
</form>
<button>
  Update
</button>
<button>
  Remove
</button>
```
## Change
```
UPDATE: form > input:nth-of-type(1)[value] "a" => "b"
UPDATE: form > input:nth-of-type(2)[value] "a" => "b"
UPDATE: form > input:nth-of-type(3)[value] "a" => "b"
UPDATE: form > input:nth-of-type(4)[value] "a" => "b"
UPDATE: form > input:nth-of-type(5)[value] "a" => "b"
UPDATE: form > input:nth-of-type(6)[value] "a" => "b"
UPDATE: form > input:nth-of-type(7)[value] "a" => "b"
```

# Update
```js
for (const input of container.querySelectorAll("input")) {
_strict.default.equal(input.value, "b", `${input.type} value`);
  const form = container.querySelector("form");
  form.querySelector("[type=checkbox]").checked = true;
  form.querySelector("[type=radio]").checked = true;
  const data = new form.ownerDocument.defaultView.FormData(form);
  _strict.default.equal(data.get("checkbox"), "b");
  _strict.default.equal(data.get("hidden"), "b");
  _strict.default.equal(data.get("radio"), "b");
}
```

# Update
```js
container.querySelectorAll("button")[1].click();
```
```html
<form>
  <input
    name="button"
    type="button"
  />
  <input
    checked=""
    name="checkbox"
    type="checkbox"
  />
  <input
    name="hidden"
    type="hidden"
  />
  <input
    name="image"
    type="image"
  />
  <input
    checked=""
    name="radio"
    type="radio"
  />
  <input
    name="reset"
    type="reset"
  />
  <input
    name="submit"
    type="submit"
  />
</form>
<button>
  Update
</button>
<button>
  Remove
</button>
```
## Change
```
UPDATE: form > input:nth-of-type(1)[value] "b" => null
UPDATE: form > input:nth-of-type(2)[value] "b" => null
UPDATE: form > input:nth-of-type(3)[value] "b" => null
UPDATE: form > input:nth-of-type(4)[value] "b" => null
UPDATE: form > input:nth-of-type(5)[value] "b" => null
UPDATE: form > input:nth-of-type(6)[value] "b" => null
UPDATE: form > input:nth-of-type(7)[value] "b" => null
```

# Update
```js
for (const input of container.querySelectorAll("input")) {
_strict.default.equal(input.hasAttribute("value"), false, `${input.type} attribute`);
_strict.default.equal(input.value, input.type === "checkbox" || input.type === "radio" ? "on" : "", `${input.type} value`);
  const form = container.querySelector("form");
  const data = new form.ownerDocument.defaultView.FormData(form);
  _strict.default.equal(data.get("checkbox"), "on");
  _strict.default.equal(data.get("hidden"), "");
  _strict.default.equal(data.get("radio"), "on");
}
```
