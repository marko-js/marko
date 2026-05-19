// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$hide($scope._, true);
}));
const $if_content__setup = $if_content__setup__script;
const $if = /* @__PURE__ */ _if("#text/0", "<button></button>", " b", $if_content__setup);
const $hide = /* @__PURE__ */ _let("hide/1", ($scope) => $if($scope, !$scope.hide ? 0 : 1));
function $setup($scope) {
	$hide($scope, undefined);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
