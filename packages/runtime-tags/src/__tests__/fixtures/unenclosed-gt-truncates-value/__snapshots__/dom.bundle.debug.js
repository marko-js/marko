// template.marko
const $template = "<!><!>= 0/><div> </div><!><!><div>plain</div>";
const $walks = "b%cD l%b%b b";
const $setup = () => {};
const $if = /*@__PURE__*/ _if("#text/0", " 0>truncated", "b");
const $if2 = /*@__PURE__*/ _if("#text/2", "enclosed", "b");
const $input_n = ($scope, input_n) => {
	$if($scope, input_n ? 0 : 1);
	$if2($scope, input_n > 0 ? 0 : 1);
};
const $positive = ($scope, positive) => _text($scope["#text/1"], positive);
const $input_delta = $positive;
const $if3 = /*@__PURE__*/ _if("#text/3", "a > b", "b");
const $input_ok = ($scope, input_ok) => $if3($scope, input_ok ? 0 : 1);
const $input_cls = ($scope, input_cls) => _attr_class($scope["#div/4"], input_cls);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_delta($scope, input.delta);
	$input_ok($scope, input.ok);
	$input_cls($scope, input.cls);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
