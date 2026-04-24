# Render
```html
<!--M_[-->
<div>
  Child 1 has 
  <!---->
  3
  <!--M_*2 #text/0-->
</div>
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "__tests__/tags/child1.marko",
      tagName: _._[
        "__tests__/tags/child1.marko"
        ],
      val: 3
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
<div>
  Child 2 has 3
</div>
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "__tests__/tags/child1.marko",
      tagName: _._[
        "__tests__/tags/child1.marko"
        ],
      val: 3
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
UPDATE div/#text1 "" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Child 1 has 3
</div>
<!--M_]1 #text/0 2-->
<button />
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      "ConditionalRenderer:#text/0": "__tests__/tags/child1.marko",
      tagName: _._[
        "__tests__/tags/child1.marko"
        ],
      val: 3
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
UPDATE div/#text1 "" => "3"
```