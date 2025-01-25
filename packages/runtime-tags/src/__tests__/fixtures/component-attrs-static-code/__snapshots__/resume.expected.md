# Render
```html
<html>
  <head />
  <body>
    <button>
      $0.00
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button>
      $0.00
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{"#childScope/0":_.a={input:{format:_._["__tests__/template.marko_0/formatNumber"]},count:0},"#childScope/1":_.b={input:{format:_._["__tests__/template.marko_0/formatNumber2"]},count:0}},1:_.a,2:_.b}),1,"__tests__/tags/counter.marko_0_count",2,"__tests__/tags/counter.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelectorAll("button").forEach(button => button.click());
```
```html
<html>
  <head />
  <body>
    <button>
      $1.00
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button>
      $1.00
      <!--M_*2 #text/1-->
    </button>
    <!--M_*2 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{"#childScope/0":_.a={input:{format:_._["__tests__/template.marko_0/formatNumber"]},count:0},"#childScope/1":_.b={input:{format:_._["__tests__/template.marko_0/formatNumber2"]},count:0}},1:_.a,2:_.b}),1,"__tests__/tags/counter.marko_0_count",2,"__tests__/tags/counter.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button0/#text "$0.00" => "$1.00"
UPDATE html/body/button1/#text "$0.00" => "$1.00"
```