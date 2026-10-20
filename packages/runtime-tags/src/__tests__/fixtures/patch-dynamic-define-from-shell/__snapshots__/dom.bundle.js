// tags/address-view.marko
const $template = "<p> </p>";
const $input_address_city = ($scope, input_address_city) => _text($scope.a, input_address_city);
const $input_address = ($scope, input_address) => $input_address_city($scope, input_address?.city);

// template.marko
const $Other_content__user_name = ($scope, user_name) => _text($scope.a, user_name);
const $Other_content__$params = ($scope, $params3) => $Other_content__user_name($scope, $params3[0].user?.name);
const $Other_content = _content$1("a0", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $Card_content__user_name = /*@__PURE__*/ _const(6, ($scope) => _text($scope.a, $scope.g));
const $Card_content__user_address = ($scope, user_address) => $input_address($scope.b, user_address);
const $Card_content__setup = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$picked($scope._, $scope.g);
}));
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__user_name($scope, $params2[0].user?.name);
	$Card_content__user_address($scope, $params2[0].user?.address);
};
const $Card_content = _content$1("a1", /*@__PURE__*/ ((_w0) => `<h4> </h4>${_w0}<button class=pick>pick</button>`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}& b`)("D l"), $Card_content__setup, $Card_content__$params);
const $picked = /*@__PURE__*/ _fill_let("a3", 6, ($scope) => _text($scope.b, $scope.g));
