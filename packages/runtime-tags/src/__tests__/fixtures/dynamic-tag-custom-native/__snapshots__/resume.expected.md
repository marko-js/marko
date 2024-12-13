# Render {}
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <div>
      Id is 
      <!---->
      dynamic
      <!--M_*1 #text/0-->
    </div>
    <!--M_]0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["__tests__/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["__tests__/components/child.marko"]},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <div
      id="dynamic"
    />
    <!--M_]0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["__tests__/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["__tests__/components/child.marko"]},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div2
removed #comment after #document/html0/body1/div2
removed div after #document/html0/body1/div2
#document/html0/body1/div2: attr(id) null => "dynamic"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button />
    <!--M_*0 #button/0-->
    <div>
      Id is dynamic
    </div>
    <!--M_]0 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{tagName:_._["__tests__/components/child.marko"],"#text/1!":_.a={},"#text/1(":_._["__tests__/components/child.marko"]},1:_.a}),0,"__tests__/template.marko_0_tagName",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div2
removed div after #document/html0/body1/div2
#document/html0/body1/div2/#text1: "" => "dynamic"
```