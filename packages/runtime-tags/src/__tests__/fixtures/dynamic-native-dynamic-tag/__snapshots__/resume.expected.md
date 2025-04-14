# Render
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_|1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
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
    <div
      class="A"
    >
      body content
    </div>
    <!--M_|1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE span after html/body/div
INSERT html/body/div/#text
UPDATE html/body/div[class] null => "A"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_|1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b=[0,{"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a]),"__tests__/template.marko_0_tagName",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span
REMOVE div after html/body/span
INSERT html/body/span/#text
UPDATE html/body/span[class] null => "A"
```