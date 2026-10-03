// template.marko
const $template = "<div> </div><div> </div><!><!>";
const $walks = "D lD l%c";
const $setup = () => {};
const $if_content__chars = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/1"], $scope._.chars.join("")));
const $if_content__setup = ($scope) => {
	$if_content__chars._($scope);
	$if_content__$pattern2_._($scope);
};
const $if_content__$pattern2_ = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.$pattern2_0));
const $pattern3 = ($scope, $pattern) => $all($scope, (([ ...all]) => all)($pattern));
const $all = ($scope, all) => _text($scope["#text/0"], all.join("+"));
const $input_list = $pattern3;
const $pattern4 = ($scope, $pattern2) => {
	$chars($scope, (([ ...chars]) => chars)($pattern2));
	$pattern2_($scope, $pattern2[0]);
};
const $chars = /*@__PURE__*/ _const("chars", ($scope) => {
	_text($scope["#text/1"], $scope.chars.join("-"));
	$if_content__chars($scope);
});
const $pattern2_ = /*@__PURE__*/ _const("$pattern2_0", $if_content__$pattern2_);
const $if = /*@__PURE__*/ _if("#text/2", "<span><!><!></span>", "D%b%", $if_content__setup);
const $input_text = ($scope, input_text) => {
	$pattern4($scope, input_text);
	$if($scope, input_text ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_list($scope, input.list);
	$input_text($scope, input.text);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
