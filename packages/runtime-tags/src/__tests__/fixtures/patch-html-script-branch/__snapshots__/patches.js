// PATCH
[`a0; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  ba: [{
    "aa nonce": "n1"
  }, "a0"],
  tb: "a"
}]
;BAE

// PATCH holding BAE
{
  ba: [{
    "aa nonce": "n1"
  }, "a0"],
  tb: "b"
}

// PATCH holding BAE
{
  ba: 0,
  tb: "b"
}

// PATCH holding BAE
{
  ba: [{
    "aa nonce": "n2"
  }, "a0"],
  tb: "b"
}
