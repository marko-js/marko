// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if = /*@__PURE__*/ _if("#text/1", "<span>shown</span>");
const $input_opts_show__OR__on = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_opts_show", /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.input_opts_show && $scope.on ? 0 : 1)));
const $on = /*@__PURE__*/ _let("on/6", $input_opts_show__OR__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input_opts_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_opts_show", $input_opts_show__OR__on);
const $input = ($scope, input) => $input_opts($scope, input.opts);
const $input_opts = ($scope, input_opts) => $input_opts_show($scope, input_opts?.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
