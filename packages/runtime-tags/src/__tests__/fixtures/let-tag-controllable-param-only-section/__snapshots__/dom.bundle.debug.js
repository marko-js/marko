// tags/ctl.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content__setup__script = _script("__tests__/tags/ctl.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, 5);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_change("count/5", $if_content__count);
const $input_countChange = ($scope, input_countChange) => $count($scope, 0, input_countChange);
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_countChange($scope, input.countChange);
	$input_show($scope, input.show);
};
var ctl_default = /*@__PURE__*/ _template("__tests__/tags/ctl.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $total = /*@__PURE__*/ _let("total/2", ($scope) => _text($scope["#text/1"], $scope.total));
function $setup($scope) {
	$input_show($scope["#childScope/0"], true);
	$input_countChange($scope["#childScope/0"], $countChange($scope));
	$total($scope, 0);
}
const $countChange = ($scope) => function(v) {
	$total($scope, v * 10);
};
_resumed["__tests__/template.marko_0/countChange"] = $countChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
