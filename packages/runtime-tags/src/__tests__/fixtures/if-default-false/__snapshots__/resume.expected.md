# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <!--M_|0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
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
    <!--M_*0 #button/0-->
    hi
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #comment after html/body/#text
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
    <!--M_*0 #button/0-->
    <!--M_|0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#comment1
REMOVE #text after html/body/#comment1
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
    <!--M_*0 #button/0-->
    hi
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #comment after html/body/#text
```