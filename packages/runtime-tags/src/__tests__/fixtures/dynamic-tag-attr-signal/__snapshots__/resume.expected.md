# Render
```html
<html>
  <head />
  <body>
    <p
      class="A"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"__tests__/template.marko_0_className",0];M._.w()
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
    <p
      class="B"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"__tests__/template.marko_0_className",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/p[class] "A" => "B"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <p
      class="A"
    >
      paragraph
    </p>
    <!--M_*0 #p/0-->
    <button />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{className:"A"}}),0,"__tests__/template.marko_0_className",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/p[class] "B" => "A"
```