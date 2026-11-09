// template.marko
const $D_content__walks = "%b";
const $D_content__template = "<!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $D_content__q = ($scope, q) => _text($scope["#text/0"], $scope._["#LoopKey"] > q);
const $D_content__$params = ($scope, $params3) => $D_content__$temp($scope, $params3[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__q($scope, $temp.q);
const $for_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$D_content__q($scope["#childScope/0"]);
};
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/0", $D_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($D_content__walks), $for_content__setup);
function $setup($scope) {
	$for($scope, [1, 1]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
