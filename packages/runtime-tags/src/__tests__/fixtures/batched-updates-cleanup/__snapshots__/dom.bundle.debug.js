// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
const $if_content__message = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.message));
const $if_content__setup = $if_content__message;
const $if = /* @__PURE__ */ _if("#text/1", "<span> </span>", "D l", $if_content__setup);
const $show = /* @__PURE__ */ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $message = /* @__PURE__ */ _let("message/3", $if_content__message);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, "bye");
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$message($scope, "hi");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
