# Render
```html
<html>
  <head />
  <body>
    <button>
      <pre>
        a    1    
        <!---->
        0
        <!--M_*1 #text/1-->
      </pre>
      <pre>
        b    2    
        <!---->
        0
        <!--M_*1 #text/2-->
      </pre>
      <pre>
        c  {c:4}  
        <!---->
        {}
        <!--M_*1 #text/3-->
      </pre>
      <pre>
        d    7    
        <!---->
        0
        <!--M_*1 #text/4-->
      </pre>
      <pre>
        f   [9]   
        <!---->
        []
        <!--M_*1 #text/5-->
      </pre>
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container?.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      <pre>
        a    1    
        <!---->
        1
        <!--M_*1 #text/1-->
      </pre>
      <pre>
        b    2    
        <!---->
        2
        <!--M_*1 #text/2-->
      </pre>
      <pre>
        c  {c:4}  
        <!---->
        {"c":4}
        <!--M_*1 #text/3-->
      </pre>
      <pre>
        d    7    
        <!---->
        7
        <!--M_*1 #text/4-->
      </pre>
      <pre>
        f   [9]   
        <!---->
        [9]
        <!--M_*1 #text/5-->
      </pre>
    </button>
    <!--M_*1 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/pre0/#text1 "0" => "1"
UPDATE html/body/button/pre1/#text1 "0" => "2"
UPDATE html/body/button/pre2/#text1 "{}" => "{\"c\":4}"
UPDATE html/body/button/pre3/#text1 "0" => "7"
UPDATE html/body/button/pre4/#text1 "[]" => "[9]"
```