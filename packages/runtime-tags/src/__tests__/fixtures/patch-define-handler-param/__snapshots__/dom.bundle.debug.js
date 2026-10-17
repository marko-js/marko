// template.marko
const $Card_content__walks = "Db%l b";
const $Card_content__template = "<h1>Product <!></h1><button>Add to cart</button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p>Cart: <!></p>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&Db%l`)($Card_content__walks);
const $Card_content__id = /*@__PURE__*/ _const("id", ($scope) => _text($scope["#text/0"], $scope.id));
const $Card_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$cart($scope._, [...$scope._.cart, $scope.id]);
}));
const $Card_content__setup = $Card_content__setup__script;
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => $Card_content__id($scope, $temp.id);
const $cart = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "cart/5", ($scope) => _text($scope["#text/1"], $scope.cart.join(",")));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Card_content__setup($scope["#childScope/0"]);
	$cart($scope, []);
}
const $input_id = ($scope, input_id) => $Card_content__id($scope["#childScope/0"], input_id);
const $input = ($scope, input) => $input_id($scope, input.id);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
