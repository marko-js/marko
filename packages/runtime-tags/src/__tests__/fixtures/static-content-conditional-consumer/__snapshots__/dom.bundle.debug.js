// tags/consumer.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%c", $if_content__setup);
const $show__script = _script("__tests__/tags/consumer.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup$1($scope) {
	$show($scope, false);
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var consumer_default = /*@__PURE__*/ _template("__tests__/tags/consumer.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $consumer_content = _content_resume("__tests__/template.marko_1_content", "<div>static content</div>", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $consumer_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
