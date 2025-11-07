# Write
```html
  Before<!--M_[-->ERROR!<!--M_]1 #text/0 2-->After<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,1,_.a={"#BranchAccessor":"#text/0","#CatchContent":_.c={}}],_.a["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.c),_.b)]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    Before
    <!--M_[-->
    ERROR!
    <!--M_]1 #text/0 2-->
    After
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
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/script
INSERT html/body/script/#text
```