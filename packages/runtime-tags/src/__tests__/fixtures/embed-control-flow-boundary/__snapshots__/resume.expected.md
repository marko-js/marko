# Render
```html
<button
  id="toggle"
>
  Toggle
</button>
<!--Membedded*1 #button/0-->
<button
  id="cleanup"
>
  Cleanup
</button>
<!--Membedded*1 #button/1-->
<div>
  Hello
</div>
<!--Membedded|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT #text
```

# Render
```js
container.querySelector("button#toggle").click();
```
```html
<button
  id="toggle"
>
  Toggle
</button>
<!--Membedded*1 #button/0-->
<button
  id="cleanup"
>
  Cleanup
</button>
<!--Membedded*1 #button/1-->
<!--Membedded|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
REMOVE #comment2 after div
INSERT #comment2
REMOVE div after #comment2
```

# Render
```js
container.querySelector("button#toggle").click();
```
```html
<button
  id="toggle"
>
  Toggle
</button>
<!--Membedded*1 #button/0-->
<button
  id="cleanup"
>
  Cleanup
</button>
<!--Membedded*1 #button/1-->
<div>
  Hello
</div>
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT div
REMOVE #comment after div
```

# Render
```js
container.querySelector("button#toggle").click();
```
```html
<button
  id="toggle"
>
  Toggle
</button>
<!--Membedded*1 #button/0-->
<button
  id="cleanup"
>
  Cleanup
</button>
<!--Membedded*1 #button/1-->
<!--Membedded|1 #text/2 2-->
<script>
  WALKER_RUNTIME("M")("embedded");
  (M.embedded.b = {})[
    "__tests__/template.marko"
    ] = 1;
  M.embedded.r = [_ =&gt; (_.a = [0,
    {}]),
    "__tests__/template.marko_0_hide 1 __tests__/template.marko_0 1"
  ];
  M.embedded.w()
</script>
```

# Mutations
```
INSERT #comment2
REMOVE div after #comment2
```

# Render
```js
container.querySelector("button#cleanup").click();
```
# Mutations
```
REMOVE button, #comment, button, #comment, #comment, #text, script in #document/html/body
```
# Console
```
LOG "cleaned up"
```