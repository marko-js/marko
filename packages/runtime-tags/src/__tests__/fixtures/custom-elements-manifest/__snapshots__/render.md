# Render
```html
<probe-badge
  count="0"
  label="Likes"
>
  <span>
    Likes on this post
  </span>
</probe-badge>
<output>
  0
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```

# Update
```js
const badge = document.querySelector("probe-badge");
const Badge = document.defaultView.customElements.get("probe-badge");
assert.ok(badge instanceof Badge);
assert.equal(badge.getAttribute("label"), "Likes");
assert.equal(badge.getAttribute("count"), "0");
assert.equal(badge.hasAttribute("disabled"), false);
assert.equal(badge.textContent, "Likes on this post");
assert.equal(
  badge.shadowRoot.querySelector("button").textContent,
  "Likes: 0",
);
assert.equal(badge.shadowRoot.querySelector("button").disabled, false);
assert.deepEqual(
  badge.shadowRoot.querySelector("slot").assignedNodes(),
  [badge.querySelector("span")],
);
badge.shadowRoot.querySelector("button").click();
```
```html
<probe-badge
  count="1"
  label="Likes"
>
  <span>
    Likes on this post
  </span>
</probe-badge>
<output>
  1
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
UPDATE: probe-badge[count] "0" => "1"
UPDATE: output::text "0" => "1"
```

# Update
```js
const badge = document.querySelector("probe-badge");
assert.equal(document.querySelector("output").textContent, "1");
assert.equal(badge.getAttribute("count"), "1");
assert.equal(
  badge.shadowRoot.querySelector("button").textContent,
  "Likes: 1",
);
document.querySelector("#reset").click();
```
```html
<probe-badge
  count="5"
  label="Votes"
>
  <span>
    Votes on this post
  </span>
</probe-badge>
<output>
  5
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
UPDATE: probe-badge[count] "1" => "5"
UPDATE: output::text "1" => "5"
UPDATE: probe-badge[label] "Likes" => "Votes"
UPDATE: probe-badge > span::text@0 "Likes" => "Votes"
```

# Update
```js
const badge = document.querySelector("probe-badge");
assert.equal(document.querySelector("output").textContent, "5");
assert.equal(badge.getAttribute("label"), "Votes");
assert.equal(badge.getAttribute("count"), "5");
assert.equal(badge.textContent, "Votes on this post");
assert.equal(
  badge.shadowRoot.querySelector("button").textContent,
  "Votes: 5",
);
document.querySelector("#toggle").click();
```
```html
<probe-badge
  count="5"
  disabled=""
  label="Votes"
>
  <span>
    Votes on this post
  </span>
</probe-badge>
<output>
  5
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
UPDATE: probe-badge[disabled] null => ""
```

# Update
```js
const badge = document.querySelector("probe-badge");
const button = badge.shadowRoot.querySelector("button");
assert.equal(badge.hasAttribute("disabled"), true);
assert.equal(button.disabled, true);
button.click();
```

# Update
```js
assert.equal(document.querySelector("output").textContent, "5");
document.querySelector("#toggle").click();
```
```html
<probe-badge
  count="5"
  label="Votes"
>
  <span>
    Votes on this post
  </span>
</probe-badge>
<output>
  5
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
UPDATE: probe-badge[disabled] "" => null
```

# Update
```js
const badge = document.querySelector("probe-badge");
const button = badge.shadowRoot.querySelector("button");
assert.equal(badge.hasAttribute("disabled"), false);
assert.equal(button.disabled, false);
button.click();
```
```html
<probe-badge
  count="6"
  label="Votes"
>
  <span>
    Votes on this post
  </span>
</probe-badge>
<output>
  6
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
UPDATE: probe-badge[count] "5" => "6"
UPDATE: output::text "5" => "6"
```

# Update
```js
const badge = document.querySelector("probe-badge");
assert.equal(document.querySelector("output").textContent, "6");
assert.equal(
  badge.shadowRoot.querySelector("button").textContent,
  "Votes: 6",
);
const parent = badge.parentNode;
const next = badge.nextSibling;
badge.remove();
let changes = 0;
badge.addEventListener("count-change", () => changes++);
badge.shadowRoot.querySelector("button").click();
assert.equal(changes, 0);
parent.insertBefore(badge, next);
badge.shadowRoot.querySelector("button").click();
assert.equal(changes, 1);
```
```html
<probe-badge
  count="7"
  label="Votes"
>
  <span>
    Votes on this post
  </span>
</probe-badge>
<output>
  7
</output>
<button
  id="reset"
>
  Reset
</button>
<button
  id="toggle"
>
  Toggle disabled
</button>
```
## Change
```
REMOVE: probe-badge
INSERT: probe-badge
UPDATE: probe-badge[count] "6" => "7"
UPDATE: output::text "6" => "7"
```

# Update
```js
const badge = document.querySelector("probe-badge");
assert.equal(document.querySelector("output").textContent, "7");
assert.equal(badge.getAttribute("count"), "7");
assert.equal(
  badge.shadowRoot.querySelector("button").textContent,
  "Votes: 7",
);
```
