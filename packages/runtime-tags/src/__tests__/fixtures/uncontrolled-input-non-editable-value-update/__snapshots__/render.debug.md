# Render
```html
<form>
  <input
    name="button"
    type="button"
    value="a"
  />
  <input
    checked=""
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
    checked=""
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
```

# Update
```js
container.querySelector("button").click();
```
```html
<form>
  <input
    name="button"
    type="button"
    value="b"
  />
  <input
    checked=""
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
    checked=""
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
  const data = new form.ownerDocument.defaultView.FormData(form);
  _strict.default.equal(data.get("checkbox"), "b");
  _strict.default.equal(data.get("hidden"), "b");
  _strict.default.equal(data.get("radio"), "b");
}
```
