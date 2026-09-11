// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{"PatchBranch:#text/
    0 ":[{"
    PatchAttr: #script / 0 nonce ":"
    n1 "},"
    packages / runtime - tags / src / __tests__ / fixtures / persisted - html - script - branch / template.marko_1 * shell "],"
    PatchText: #text / 1 ":"
    a "}]

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{"PatchBranch:#text/
    0 ":[{"
    PatchAttr: #script / 0 nonce ":"
    n1 "},"
    packages / runtime - tags / src / __tests__ / fixtures / persisted - html - script - branch / template.marko_1 * shell "],"
    PatchText: #text / 1 ":"
    b "}]

// PATCH
{
  "PatchBranch:#text/0": 0,
  "PatchText:#text/1": "b"
}

// PATCH
[`packages/runtime-tags/src/__tests__/fixtures/persisted-html-script-branch/template.marko_1*shell; ;<script>
      {
        const main = document.querySelector("main");
      main.dataset.ran = (+main.dataset.ran || 0) + 1;
      main.dataset.nonce = document.currentScript.getAttribute("nonce");
      main.dataset.connected = document.currentScript.isConnected;
      }
    < /script>`,{"PatchBranch:#text/
    0 ":[{"
    PatchAttr: #script / 0 nonce ":"
    n2 "},"
    packages / runtime - tags / src / __tests__ / fixtures / persisted - html - script - branch / template.marko_1 * shell "],"
    PatchText: #text / 1 ":"
    b "}]
