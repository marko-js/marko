# Render
```html
<span
  class="A"
>
  <!--M_[-->
  body content
  <!--M_]2 #span/0 3-->
</span>
<!--M_'1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "span",
      tagName: "span",
      className: "A"
    },
    {
      "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content"
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT span/#text1
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="A"
>
  body content
</div>
<!--M_'1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "span",
      tagName: "span",
      className: "A"
    },
    {
      "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content"
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE span after div
INSERT div/#text
UPDATE div[class] null => "A"
```

# Render
```js
container.querySelector("button").click();
```
```html
<span
  class="A"
>
  body content
</span>
<!--M_'1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "span",
      tagName: "span",
      className: "A"
    },
    {
      "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content"
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT span
REMOVE div after span
INSERT span/#text
UPDATE span[class] null => "A"
```