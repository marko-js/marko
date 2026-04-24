# Render
```html
<button />
<!--M_*1 #button/0-->
<!--M_[-->
<div>
  Id is 
  <!---->
  dynamic
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/1": "__tests__/tags/child.marko",
      tagName: _._[
        "__tests__/tags/child.marko"
        ]
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!--M_*1 #button/0-->
<div
  id="dynamic"
/>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/1": "__tests__/tags/child.marko",
      tagName: _._[
        "__tests__/tags/child.marko"
        ]
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #comment after div
REMOVE div after div
REMOVE #text after div
UPDATE div[id] null => "dynamic"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!--M_*1 #button/0-->
<div>
  Id is dynamic
</div>
<!--M_]1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/1": "__tests__/tags/child.marko",
      tagName: _._[
        "__tests__/tags/child.marko"
        ]
    }]),
    "__tests__/template.marko_0_tagName 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div
REMOVE div after div
UPDATE div/#text1 "" => "dynamic"
```