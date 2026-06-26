// template.marko
const $template = "<div id=out></div>";
const $walks = "b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => document.getElementById("out").textContent = [$signal($scope, 0).aborted, $signal($scope, 0).aborted].join());
function $setup($scope) {
	$signalReset($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b", $setup);
