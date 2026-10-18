// outer.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/outer.marko": "__tests__/outer.marko;D%;<section><!></section>" });
var outer_default = _template("__tests__/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/outer.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_wrap = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.wrap ? outer_default : "div", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`body ${_patch_text($scope1_id, "#text/0", input.x, 2, $scope0_reason, 2)}`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_x: input.x }] : []), 0, $wg__input_wrap, void 0, 2, $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		"ClosureScopes:input_x/5": _write_if($scope0_reason, 2) && $input_x__closures
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] }) : _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_1*content") && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 2));
}, 1);
