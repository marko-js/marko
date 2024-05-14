# Render {}
```html
<html>
  <head />
  <body>
    <button>
      <pre>
        a    1    
        <!---->
        0
        <!--M*0 #text/1-->
      </pre>
      <pre>
        b    2    
        <!---->
        0
        <!--M*0 #text/2-->
      </pre>
      <pre>
        c  {c:4}  
        <!---->
        0
        <!--M*0 #text/3-->
      </pre>
      <pre>
        d    7    
        <!---->
        0
        <!--M*0 #text/4-->
      </pre>
      <pre>
        f   [9]   
        <!---->
        []
        <!--M*0 #text/5-->
      </pre>
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(null),[0,"packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container?.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      <pre>
        a    1    
        <!---->
        1
        <!--M*0 #text/1-->
      </pre>
      <pre>
        b    2    
        <!---->
        2
        <!--M*0 #text/2-->
      </pre>
      <pre>
        c  {c:4}  
        <!---->
        7
        <!--M*0 #text/3-->
      </pre>
      <pre>
        d    7    
        <!---->
        7
        <!--M*0 #text/4-->
      </pre>
      <pre>
        f   [9]   
        <!---->
        [9]
        <!--M*0 #text/5-->
      </pre>
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(null),[0,"packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/pre0/#text2: "0" => "1"
#document/html0/body1/button0/pre1/#text2: "0" => "2"
#document/html0/body1/button0/pre2/#text2: "0" => "7"
#document/html0/body1/button0/pre3/#text2: "0" => "7"
#document/html0/body1/button0/pre4/#text2: "[]" => "[9]"
```