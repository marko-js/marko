# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    Body Content
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{x:null,"ConditionalScope:#text/0":_.a={}},_.a]),1,"__tests__/template.marko_0_x"];M._.w()
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
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{x:null,"ConditionalScope:#text/0":_.a={}},_.a]),1,"__tests__/template.marko_0_x"];M._.w()
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
    <!--M_]1 #text/0-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{x:null,"ConditionalScope:#text/0":_.a={}},_.a]),1,"__tests__/template.marko_0_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE div after html/body/#text
```