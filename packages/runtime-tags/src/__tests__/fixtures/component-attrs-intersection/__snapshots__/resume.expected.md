# Render
```html
<html>
  <head />
  <body>
    <div>
      0
      <!--M_*2 #text/0-->
    </div>
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"count/2":0,"#childScope/0":_.a={"value/3":0,"dummy/4":{}}},2:_.a}),1,"__tests__/template.marko_0_count",0];M._.w()
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
    <div>
      1
      <!--M_*2 #text/0-->
    </div>
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"count/2":0,"#childScope/0":_.a={"value/3":0,"dummy/4":{}}},2:_.a}),1,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text "0" => "1"
```