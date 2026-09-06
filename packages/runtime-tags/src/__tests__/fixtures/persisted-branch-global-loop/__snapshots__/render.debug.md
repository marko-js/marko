# Render `{"$global":{"search":[{"q":"a"}],"serializedGlobals":["search"]}}`
```html
<div>
  <p>
    a1
    <button>
      0
    </button>
  </p>
  <p>
    a2
    <button>
      0
    </button>
  </p>
  <p>
    a3
    <button>
      0
    </button>
  </p>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <p>
    a1
    <button>
      1
    </button>
  </p>
  <p>
    a2
    <button>
      0
    </button>
  </p>
  <p>
    a3
    <button>
      0
    </button>
  </p>
</div>
```
## Change
```
UPDATE: div > p:nth-of-type(1) > button::text "0" => "1"
```

# Update `{"$global":{"search":[{"q":"b"}],"serializedGlobals":["search"]}}`
```html
<div>
  <p>
    b1
    <button>
      1
    </button>
  </p>
  <p>
    b2
    <button>
      0
    </button>
  </p>
  <p>
    b3
    <button>
      0
    </button>
  </p>
</div>
```
## Change
```
UPDATE: div > p:nth-of-type(1)::text "a1" => "b1"
UPDATE: div > p:nth-of-type(2)::text "a2" => "b2"
UPDATE: div > p:nth-of-type(3)::text "a3" => "b3"
```

# Update `{"$global":{"search":[null,true],"serializedGlobals":["search"]}}`
```html
<p>
  invalid
</p>
```
## Change
```
REMOVE: div
INSERT: p
```

# Update `{"$global":{"search":[{"q":"c"}],"serializedGlobals":["search"]}}`
```html
<div>
  <p>
    c1
    <button>
      0
    </button>
  </p>
  <p>
    c2
    <button>
      0
    </button>
  </p>
  <p>
    c3
    <button>
      0
    </button>
  </p>
</div>
```
## Change
```
REMOVE: p
INSERT: div
INSERT: div > p
INSERT: div > p:nth-of-type(1) + p
INSERT: div > p:nth-of-type(2) + p
UPDATE: div > p:nth-of-type(1) > button::text " " => "0"
UPDATE: div > p:nth-of-type(2) > button::text " " => "0"
UPDATE: div > p:nth-of-type(3) > button::text " " => "0"
```
