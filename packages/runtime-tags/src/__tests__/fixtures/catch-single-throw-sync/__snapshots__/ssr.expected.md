# Write
```html
  a<!--M_[-->ERROR!<!--M_]1 #text/0 2-->d<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),_.c)]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    a
    <!--M_[-->
    ERROR!
    <!--M_]1 #text/0 2-->
    d
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.a = {
        "ConditionalScope:#text/0": _.b = {
          "#BranchAccessor": "#text/0"
        }
      }, _.b], _.b["#CatchContent"] = _._[
        "__tests__/template.marko_2_content"
        ](_.a), _.c)]
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