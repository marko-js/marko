// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $if_content__text = /* @__PURE__ */ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.text));
const $if_content__setup = $if_content__text;
const $if = /* @__PURE__ */ _if("#div/0", "<div> </div>", "D l", $if_content__setup);
const $hide__OR__text_length = /* @__PURE__ */ _or(4, ($scope) => $if($scope, !$scope.hide && $scope.text_length ? 0 : 1));
const $hide = /* @__PURE__ */ _let("hide/1", $hide__OR__text_length);
const $text = /* @__PURE__ */ _let("text/2", ($scope) => {
	$text_length($scope, $scope.text?.length);
	$if_content__text($scope);
});
const $id__script = _script("__tests__/tags/child.marko_0_id", ($scope) => {
	$text($scope, $scope.id);
	$hide($scope, false);
});
const $id = /* @__PURE__ */ _const("id", ($scope) => {
	_attr($scope["#div/0"], "id", $scope.id);
	$id__script($scope);
});
function $setup$1($scope) {
	$hide($scope, true);
	$text($scope, "");
	$id($scope, _id($scope));
}
const $text_length = /* @__PURE__ */ _const("text_length", $hide__OR__text_length);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&/${_w1}&`)(" b", " b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
