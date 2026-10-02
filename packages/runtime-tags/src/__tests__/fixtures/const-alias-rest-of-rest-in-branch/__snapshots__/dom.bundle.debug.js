// template.marko
const $template = "<!><!><div> </div>";
const $walks = "b%bD l";
const $setup = () => {};
const $if_content__b = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.b));
const $if_content__setup = ($scope) => {
	$if_content__b._($scope);
	$if_content__r._($scope);
};
const $if_content__r__script = _script("__tests__/template.marko_1_r2#0:9", ($scope) => _attrs_script($scope, "#span/0"));
const $if_content__r = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs($scope, "#span/0", $scope._.r2);
	$if_content__r__script($scope);
});
const $pattern2 = ($scope, $pattern) => {
	$r($scope, (({ a, b, ...r2 }) => r2)($pattern));
	$a($scope, $pattern.a);
	$b($scope, $pattern.b);
};
const $r = /*@__PURE__*/ _const("r2", $if_content__r);
const $a = ($scope, a) => _text($scope["#text/1"], a);
const $b = /*@__PURE__*/ _const("b", $if_content__b);
const $input_o = $pattern2;
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_o($scope, input.o);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
