// template.marko
const $template = "<button>toggle</button><ul></ul>";
const $walks = " b b";
const $for_content__show = /* @__PURE__ */ _show("#text/2", "#text/0");
const $for_content__compact = /* @__PURE__ */ _for_closure("#ul/1", ($scope) => $for_content__show($scope, !$scope._.compact));
const $for_content__setup = $for_content__compact;
const $for_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $compact__script = _script("__tests__/template.marko_0_compact", ($scope) => _on($scope["#button/0"], "click", function() {
	$compact($scope, !$scope.compact);
}));
const $compact = /* @__PURE__ */ _let("compact/2", ($scope) => {
	$for_content__compact($scope);
	$compact__script($scope);
});
const $for = /* @__PURE__ */ _for_of("#ul/1", "<!><!><li> </li><!><!>", "b%bD l%c", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$compact($scope, false);
	$for($scope, [[
		"read",
		"write",
		"admin"
	]]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
