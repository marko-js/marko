// tags/site-footer.marko
const $template$1 = "<footer>foot</footer>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
var site_footer_default = /*@__PURE__*/ _template("__tests__/tags/site-footer.marko", $template$1, "b");

// template.marko
const $template = "<html><body><!><main> </main><!></body></html>";
const $walks = "E%bD l%m";
const $if_content2__input_msg__script = _script("__tests__/template.marko_2_input_msg#0:5", ($scope) => _el_read($scope["#p/1"]).textContent = $scope._.input_msg);
const $if_content2__input_msg = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_input_msg#0:5/setup", "#text/2", 0, $if_content2__input_msg__script);
const $if_content2__setup = $if_content2__input_msg;
const $if_content__input_msg__script = _script("__tests__/template.marko_1_input_msg#0:5", ($scope) => _el_read($scope["#a/0"]).title = $scope._.input_msg);
const $if_content__input_msg = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_msg#0:5/setup", "#text/0", 0, $if_content__input_msg__script);
const $if_content__setup = $if_content__input_msg;
const $if = /*@__PURE__*/ _if("#text/0", "<a href=#main>Skip to content</a>", " ", $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `${_w0}<p></p>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("b"), $if_content2__setup);
const $setup__$global_meta = /*@__PURE__*/ _fill_global_path("__tests__/template.marko_0_$global_meta#5", ($scope) => {
	$if($scope, $scope.$global.meta.headings ? 0 : 1);
	$if2($scope, !$scope.$global.meta.hideFooter ? 0 : 1);
}, "meta", "headings", 0, "meta", "hideFooter");
const $setup = $setup__$global_meta;
const $input_msg = /*@__PURE__*/ _const("input_msg", ($scope) => {
	_text($scope["#text/1"], $scope.input_msg);
	$if_content__input_msg($scope);
	$if_content2__input_msg($scope);
});
const $input = ($scope, input) => $input_msg($scope, input.msg);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
