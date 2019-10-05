# write
  a<style id="^M0"></style>e...<style id="/M0"></style>f
_flush_

# write
  gh
_flush_

# write
  <t id="M0">bcd</t><script>(M$r=REORDER_RUNTIME)("M0")</script>
_flush_

# end

# final HTML
  
  <html>
    <head>
    </head>
    <body>
      abcdfgh
      <script>
        (M$r=REORDER_RUNTIME)("M0")
      </script>
    </body>
  </html>
  
