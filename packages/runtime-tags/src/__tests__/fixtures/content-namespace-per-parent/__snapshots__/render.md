# Render
```html
<button>
  Toggle
</button>
<div />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    >
      Link
    </a>
  </svg>
  <div>
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    >
      Link
    </a>
  </div>
</div>
```
## Change
```
INSERT: div > :is(svg, div)
UPDATE: div > svg > a[ns] null => "http://www.w3.org/2000/svg"
UPDATE: div > div > a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div />
```
## Change
```
REMOVE: div > :is(svg, div)
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  <svg>
    <a
      href="#"
      ns="http://www.w3.org/2000/svg"
    >
      Link
    </a>
  </svg>
  <div>
    <a
      href="#"
      ns="http://www.w3.org/1999/xhtml"
    >
      Link
    </a>
  </div>
</div>
```
## Change
```
INSERT: div > :is(svg, div)
UPDATE: div > svg > a[ns] null => "http://www.w3.org/2000/svg"
UPDATE: div > div > a[ns] null => "http://www.w3.org/1999/xhtml"
```
