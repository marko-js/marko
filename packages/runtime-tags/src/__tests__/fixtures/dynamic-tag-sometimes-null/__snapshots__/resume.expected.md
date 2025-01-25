# Render
```html
<html>
  <head />
  <body>
    <!--M_[1-->
    Body Content
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:null,"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      Body Content
    </div>
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:null,"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE #comment after html/body/div
REMOVE #text after html/body/div
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    Body Content
    <!--M_]0 #text/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{x:null,"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE div after html/body/#text
```