# Render
```html
<svg>
  <title>
    <if=editing>
      editing
      <else>
        viewing
      </else>
    </if=editing>
  </title>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <div />
  </foreignobject>
</svg>
<button
  class="edit"
>
  edit
</button>
```

# Update
```js
document.querySelector(".edit").click();
```
```html
<svg>
  <title>
    <if=editing>
      editing
      <else>
        viewing
      </else>
    </if=editing>
  </title>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <div>
      <input
        value="name"
      />
    </div>
  </foreignobject>
</svg>
<button
  class="edit"
>
  edit
</button>
```
## Change
```
INSERT: .host > div > input
```

# Update
```js
for (const el of document.querySelectorAll(".host *")) {
el.setAttribute("ns", el.namespaceURI);
}
```
```html
<svg>
  <title>
    <if=editing>
      editing
      <else>
        viewing
      </else>
    </if=editing>
  </title>
  <foreignobject
    class="host"
    height="100"
    width="100"
  >
    <div
      ns="http://www.w3.org/1999/xhtml"
    >
      <input
        ns="http://www.w3.org/1999/xhtml"
        value="name"
      />
    </div>
  </foreignobject>
</svg>
<button
  class="edit"
>
  edit
</button>
```
## Change
```
UPDATE: .host > div[ns] null => "http://www.w3.org/1999/xhtml"
UPDATE: .host > div > input[ns] null => "http://www.w3.org/1999/xhtml"
```
