# Render `{"title":"On Call","view":"roster","wide":true,"members":["ada","grace"],"$global":{"persisted":true}}`
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 0
</button>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
</ul>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"title":"On Call","view":"roster","wide":true,"members":["ada","grace","alan"],"$global":{"persisted":true}}`
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 1
</button>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
```
## Change
```
INSERT: ul:nth-of-type(1) > li:nth-of-type(2) + li
INSERT: ul:nth-of-type(2) > li:nth-of-type(2) + li
```

# Update `{"title":"On Call","view":"roster","wide":true,"members":["ada","grace","alan"],"$global":{"persisted":true}}`

# Update
```js
assert.deepEqual(rosterItems(document, 0), ["ada", "grace", "alan"]);
assert.deepEqual(rosterItems(document, 1), ["ada", "grace", "alan"]);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    ada
  </li>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"title":"Off Duty","view":"empty","wide":false,"members":["ada","grace","alan"],"$global":{"persisted":true}}`
```html
<h1>
  Off Duty
</h1>
<button
  class="count"
>
  clicked 2
</button>
<div
  members="ada,grace,alan"
/>
<p
  class="digest"
>
  3 on call: ada, grace, alan
</p>
```
## Change
```
UPDATE: h1::text "On Call" => "Off Duty"
INSERT: .count + div
REMOVE: div + ul
UPDATE: div[members] null => "ada,grace,alan"
INSERT: div + .digest
REMOVE: .digest + ul
UPDATE: .digest::text@11 "" => "ada, grace, alan"
UPDATE: .digest::text@0 "" => "3"
```

# Update `{"title":"Off Duty","view":"empty","wide":false,"members":["ada","grace","alan"],"$global":{"persisted":true}}`

# Update
```js
assert.equal(document.querySelectorAll("ul.roster").length, 0);
assert.ok(document.querySelector("div[members]"));
assert.equal(
  document.querySelector("p.digest").textContent,
  "3 on call: ada, grace, alan",
);
```

# Update `{"title":"Off Duty","view":"empty","wide":false,"members":["grace","alan"],"$global":{"persisted":true}}`
```html
<h1>
  Off Duty
</h1>
<button
  class="count"
>
  clicked 2
</button>
<div
  members="grace,alan"
/>
<p
  class="digest"
>
  2 on call: grace, alan
</p>
```
## Change
```
UPDATE: div[members] "ada,grace,alan" => "grace,alan"
UPDATE: .digest::text@11 "ada, grace, alan" => "grace, alan"
UPDATE: .digest::text@0 "3" => "2"
```

# Update `{"title":"Off Duty","view":"empty","wide":false,"members":["grace","alan"],"$global":{"persisted":true}}`

# Update
```js
assert.equal(
document.querySelector("p.digest").textContent,
"2 on call: grace, alan",
  );
```

# Update `{"title":"On Call","view":"roster","wide":true,"members":["grace","alan"],"$global":{"persisted":true}}`
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 2
</button>
<ul
  class="roster"
>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
```
## Change
```
UPDATE: h1::text "Off Duty" => "On Call"
INSERT: .count + ul
REMOVE: ul:nth-of-type(1) + div
INSERT: ul:nth-of-type(1) > li
INSERT: ul:nth-of-type(1) > li:nth-of-type(1) + li
INSERT: ul:nth-of-type(1) + ul
REMOVE: ul:nth-of-type(2) + p
INSERT: ul:nth-of-type(2) > li
INSERT: ul:nth-of-type(2) > li:nth-of-type(1) + li
```

# Update `{"title":"On Call","view":"roster","wide":true,"members":["grace","alan"],"$global":{"persisted":true}}`

# Update
```js
assert.deepEqual(rosterItems(document, 0), ["grace", "alan"]);
assert.deepEqual(rosterItems(document, 1), ["grace", "alan"]);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  On Call
</h1>
<button
  class="count"
>
  clicked 3
</button>
<ul
  class="roster"
>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
<ul
  class="roster"
>
  <li>
    grace
  </li>
  <li>
    alan
  </li>
</ul>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
