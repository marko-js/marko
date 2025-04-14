# Render
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{toggle:!1}]),"__tests__/template.marko_0_toggle",1];M._.w()
    </script>
  </body>
  <!--M_*1 #body/0-->
</html>
```


# Render
```js
container.querySelector("button")?.click();
```
```html
<html>
  <head />
  <body
    data-toggle=""
  >
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{toggle:!1}]),"__tests__/template.marko_0_toggle",1];M._.w()
    </script>
  </body>
  <!--M_*1 #body/0-->
</html>
```

# Mutations
```
UPDATE html/body[data-toggle] null => ""
```

# Render
```js
container.querySelector("button")?.click();
```
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{toggle:!1}]),"__tests__/template.marko_0_toggle",1];M._.w()
    </script>
  </body>
  <!--M_*1 #body/0-->
</html>
```

# Mutations
```
UPDATE html/body[data-toggle] "" => null
```