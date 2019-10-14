# write
  a<!^M1>i...<!/M1>j
_flush_

# write
  kl
_flush_

# write
  <t id="M1">bcd<!^M0>h...<!/M0></t><script>(M$r=REORDER_RUNTIME)("M1")</script>
_flush_

# write
  <t id="M0">efg</t><script>M$r("M0")</script>
_flush_

# end

# final HTML
  <html>
    <head />
    <body>
      abcdefgjkl
    </body>
  </html>
