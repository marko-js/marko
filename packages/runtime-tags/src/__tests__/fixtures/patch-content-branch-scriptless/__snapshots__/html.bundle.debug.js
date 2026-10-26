// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_text = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			widget_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.text, void 0, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_text#0:4/init");
				$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_text__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_text && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
			}, $scope1_id) });
			$scope0_page && _scope($scope1_id, {
				_: $wi__input_show__OR__input_text && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		input_text: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.text,
		"ClosureScopes:input_text/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_text__closures
	}, "__tests__/template.marko", 0, { input_text: ["input.text"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.text, !_server_guard($scope0_reason, 2));
}, 1);
