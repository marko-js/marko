// tags/address-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_address_city = ($scope, input_address_city) => _text($scope["#text/0"], input_address_city);
const $input$1 = ($scope, input) => $input_address($scope, input.address);
const $input_address = ($scope, input_address) => $input_address_city($scope, input_address?.city);
var address_view_default = /*@__PURE__*/ _template("__tests__/tags/address-view.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><output> </output></main>";
const $walks = "D%bD m";
const $Other_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $Other_content__$params = ($scope, $params3) => $Other_content__user_name($scope, $params3[0].user?.name);
const $Other_content = _content("__tests__/template.marko_2*content", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $Card_content__user_name = /*@__PURE__*/ _const("user_name", ($scope) => _text($scope["#text/0"], $scope.user_name));
const $Card_content__user_address = ($scope, user_address) => $input_address($scope["#childScope/1"], user_address);
const $Card_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$picked($scope._, $scope.user_name);
}));
const $Card_content__setup = $Card_content__setup__script;
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__user_name($scope, $params2[0].user?.name);
	$Card_content__user_address($scope, $params2[0].user?.address);
};
const $Card_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<h4> </h4>${_w0}<button class=pick>pick</button>`)($template$1), /*@__PURE__*/ ((_w0) => `D l/${_w0}& b`)("D l"), $Card_content__setup, $Card_content__$params);
const $picked = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "picked/6", ($scope) => _text($scope["#text/1"], $scope.picked));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_useA__OR__input_user__OR__Card__OR__Other = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_useA ? $scope.Card : $scope.Other, ($_) => ({ user: $scope.input_user })), 3);
const $Card = /*@__PURE__*/ _const("Card", $input_useA__OR__input_user__OR__Card__OR__Other);
const $Other = /*@__PURE__*/ _const("Other", $input_useA__OR__input_user__OR__Card__OR__Other);
function $setup($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
	$picked($scope, "");
}
const $input_useA = /*@__PURE__*/ _const("input_useA", $input_useA__OR__input_user__OR__Card__OR__Other);
const $input_user = /*@__PURE__*/ _const("input_user", $input_useA__OR__input_user__OR__Card__OR__Other);
const $input = ($scope, input) => {
	$input_useA($scope, input.useA);
	$input_user($scope, input.user);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
