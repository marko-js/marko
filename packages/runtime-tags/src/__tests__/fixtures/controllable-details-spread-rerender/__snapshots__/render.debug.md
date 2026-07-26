# Render
```html
<button>
  bump
</button>
<details
  data-n="0"
>
  <summary>
    s
  </summary>
  body
</details>
<output>
  closed/0
</output>
```

# Update
```js
const view = document.defaultView;
const Observer = view.MutationObserver;
view.__attached = 0;
view.MutationObserver = class extends Observer {
  constructor(callback) {
super(callback);
view.__attached++;
  disconnect() {
view.__attached--;
super.disconnect();
  }
};
}
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  bump
</button>
<details
  data-n="1"
>
  <summary>
    s
  </summary>
  body
</details>
<output>
  closed/1
</output>
```
## Change
```
UPDATE: output::text@7 "0" => "1"
UPDATE: details[data-n] "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  bump
</button>
<details
  data-n="2"
>
  <summary>
    s
  </summary>
  body
</details>
<output>
  closed/2
</output>
```
## Change
```
UPDATE: output::text@7 "1" => "2"
UPDATE: details[data-n] "1" => "2"
```

# Update
```js
const attached = (document.defaultView).__attached;
assert.ok(
  attached <= 1,
  `two spread re-renders left ${attached} MutationObservers attached`,
);
```

# Update
```js
const details = document.querySelector("details");
details.open = !details.open;
details.dispatchEvent(new details.ownerDocument.defaultView.Event("toggle"));
```
```html
<button>
  bump
</button>
<details
  data-n="2"
  open=""
>
  <summary>
    s
  </summary>
  body
</details>
<output>
  open/2
</output>
```
## Change
```
UPDATE: details[open] null => ""
UPDATE: details[open] "" => ""
UPDATE: output::text@0 "closed" => "open"
UPDATE: details[open] null => ""
```

# Update
```js
const details = document.querySelector("details");
details.open = !details.open;
details.dispatchEvent(new details.ownerDocument.defaultView.Event("toggle"));
```
```html
<button>
  bump
</button>
<details
  data-n="2"
>
  <summary>
    s
  </summary>
  body
</details>
<output>
  closed/2
</output>
```
## Change
```
UPDATE: details[open] "" => null
UPDATE: details[open] null => null
UPDATE: output::text@0 "open" => "closed"
UPDATE: details[open] "" => null
```
