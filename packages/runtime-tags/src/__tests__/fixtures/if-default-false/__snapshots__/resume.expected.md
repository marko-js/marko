# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_|1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    hi
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #comment after html/body/#comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <!--M_|1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1
REMOVE #text after html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    hi
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #comment after html/body/#comment
```