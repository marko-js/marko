# Render `{"title":"a"}`
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1"
    >
      one
    </a>
  </li>
</ul>
<p>
  a
</p>
```

# Update
```js
document.querySelectorAll("button")[n].click();
```
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1x"
    >
      one!
    </a>
  </li>
</ul>
<p>
  a
</p>
```
## Change
```
UPDATE: ul > li > a::text "one" => "one!"
UPDATE: ul > li > a[href] "/x/1" => "/x/1x"
```

# Update
```js
document.querySelectorAll("button")[n].click();
```
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1x"
    >
      one!
    </a>
  </li>
  <li>
    <a
      href="/x/2"
    >
      new
    </a>
  </li>
</ul>
<p>
  a
</p>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2) > a
UPDATE: ul > li:nth-of-type(2) > a::text " " => "new"
UPDATE: ul > li:nth-of-type(2) > a[href] null => "/x/2"
```

# Update `{"title":"b"}`
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1x"
    >
      one!
    </a>
  </li>
  <li>
    <a
      href="/x/2"
    >
      new
    </a>
  </li>
</ul>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```

# Update
```js
document.querySelectorAll("button")[n].click();
```
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1xx"
    >
      one!!
    </a>
  </li>
  <li>
    <a
      href="/x/2x"
    >
      new!
    </a>
  </li>
</ul>
<p>
  b
</p>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > a::text "one!" => "one!!"
UPDATE: ul > li:nth-of-type(1) > a[href] "/x/1x" => "/x/1xx"
UPDATE: ul > li:nth-of-type(2) > a::text "new" => "new!"
UPDATE: ul > li:nth-of-type(2) > a[href] "/x/2" => "/x/2x"
```

# Update `{"title":"c"}`
```html
<button>
  add
</button>
<button>
  rename
</button>
<ul>
  <li>
    <a
      href="/x/1xx"
    >
      one!!
    </a>
  </li>
  <li>
    <a
      href="/x/2x"
    >
      new!
    </a>
  </li>
</ul>
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```
