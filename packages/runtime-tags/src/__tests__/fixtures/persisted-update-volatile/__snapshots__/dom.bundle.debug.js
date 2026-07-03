// template.marko.update.mjs
const $update = (patch, live) => {
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_title" in patch) live["input_title"] = patch["input_title"];
	if ("label" in patch) live["label"] = patch["label"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
	if ("#text/2" in patch) _text(live["#text/2"], patch["#text/2"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
const $template = "<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>";
const $walks = "D lDb%lD l D l";
const $count = /* @__PURE__ */ _let("count/8", ($scope) => _text($scope["#text/4"], $scope.count));
const $label = ($scope, label) => _text($scope["#text/2"], label);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/1"], nextStamp());
	$count($scope, 0);
	$label($scope, `label:${nextStamp()}`);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
