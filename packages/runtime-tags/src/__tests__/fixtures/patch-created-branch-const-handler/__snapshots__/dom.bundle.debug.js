// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__opts = ($scope, opts) => $if_content__opts_step($scope, opts.step);
const $if_content__opts_step__script = _script("__tests__/template.marko_1_opts_step#3", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, $scope.n + $scope.opts_step);
}));
const $if_content__opts_step = /*@__PURE__*/ _const("opts_step", $if_content__opts_step__script);
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/4", ($scope) => _text($scope["#text/1"], $scope.n));
const $if_content__setup = ($scope) => {
	$if_content__opts($scope, { step: 2 });
	$if_content__n($scope, 0);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
