# Render
```html
<select
  multiple=""
>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<select
  multiple=""
>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    default-selected=""
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    default-selected=""
    value="b"
  />
</select>
<button>
  Update
</button>
```
## Change
```
UPDATE: select:nth-of-type(4) > option:nth-of-type(2)[selected] null => ""
UPDATE: select:nth-of-type(3) > option:nth-of-type(2)[selected] null => ""
```
