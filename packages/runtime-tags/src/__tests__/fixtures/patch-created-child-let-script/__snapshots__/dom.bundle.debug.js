// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/probe.marko
const $template = "<p>probe</p>";
const $walks = "b";
const $count__script = _script("__tests__/tags/probe.marko_0_count#0", ($scope) => document.body.dataset.count = String($scope.count + 1));
const $count = /*@__PURE__*/ _let("count/0", $count__script);
function $setup($scope) {
	$count($scope, 5);
}
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template, "b", $setup);
