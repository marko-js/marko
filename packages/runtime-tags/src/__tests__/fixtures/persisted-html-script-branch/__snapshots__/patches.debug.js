// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n1"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell"],
  "PatchText:#text/1": "a"
}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n1"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell"],
  "PatchText:#text/1": "b"
}]

// PATCH
{
  "PatchBranch:#text/0": 0,
  "PatchText:#text/1": "b"
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>\n      { const main = document.querySelector("main");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.getAttribute("nonce");\n      main.dataset.connected = document.currentScript.isConnected; }\n    </script>`, {
  "PatchBranch:#text/0": [{
    "PatchAttr:#script/0 nonce": "n2"
  }, "packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell"],
  "PatchText:#text/1": "b"
}]
