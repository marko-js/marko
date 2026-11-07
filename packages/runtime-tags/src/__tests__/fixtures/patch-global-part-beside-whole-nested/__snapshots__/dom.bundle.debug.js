// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__$global_meta_title__OR__$global_meta_flag = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope.$global.meta.title + ":" + $scope.$global.meta.flag));
const $if_content__$global_meta_title = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_meta_title#0:7/setup", "#text/0", 0, $if_content__$global_meta_title__OR__$global_meta_flag);
const $if_content__setup = ($scope) => {
	$if_content__$global_meta_title._($scope);
	$if_content__$global_meta_flag._($scope);
};
const $if_content__$global_meta_flag = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global_meta_flag#0:8/setup", "#text/0", 0, $if_content__$global_meta_title__OR__$global_meta_flag);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $global_meta_title = _fill_global_path_resume("__tests__/template.marko_0_$global_meta_title#7/subscribe", $if_content__$global_meta_title, "meta", "title");
const $global_meta_flag = _fill_global_path_resume("__tests__/template.marko_0_$global_meta_flag#8/subscribe", $if_content__$global_meta_flag, "meta", "flag");
function $setup($scope) {
	$global_meta_title($scope);
	$global_meta_flag($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
