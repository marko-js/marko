// template.marko
const $template = "<!><!><div class=log> </div>";
const $walks = "b%bD l";
const $for_content__label__script = _script("__tests__/template.marko_1_label", ($scope) => _on($scope["#button/0"], "click", function() {
	$log($scope._, `${$scope._.log}[${$scope.label}]`);
}));
const $for_content__label = /* @__PURE__ */ _const("label", $for_content__label__script);
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $log = /* @__PURE__ */ _let("log/2", ($scope) => _text($scope["#text/1"], $scope.log));
const $for = /* @__PURE__ */ _for_of("#text/0", "<button>pick</button>", " b", 0, $for_content__$params);
function $setup($scope) {
	$log($scope, "");
	$for($scope, [["a", "b"]]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
