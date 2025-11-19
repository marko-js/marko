# Write
```html
  a<!--M_[--><!--M_!^b-->b<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#CatchContent":_.c={}}],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)]</script>
```

# Write
```html
  cd<!--M_!b--><!--M_]1 #text/0 2-->fgh
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    a
    <!--M_[-->
    <!--M_!^b-->
    b
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.c = {}
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/script
```

# Render ASYNC
```html
<html>
  <head />
  <body>
    a
    <!--M_[-->
    <!--M_!^b-->
    b
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 1, _.a = {
        "#BranchAccessor": "#text/0",
        "#CatchContent": _.c = {}
      }], _.a["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.c), _.b)]
    </script>
    cd
    <!--M_!b-->
    <!--M_]1 #text/0 2-->
    fgh
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/#comment3
INSERT html/body/#text3
```