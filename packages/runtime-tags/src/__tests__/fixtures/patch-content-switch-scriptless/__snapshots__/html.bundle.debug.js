// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("D%l")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;Db%;<i>B:<!></i>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell,<b>A</b>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_kind = _write_if($scope0_reason, 0), $cg__input_kind = _client_guard($scope0_reason, 0), $wg__input_kind = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_kind__closures = new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	widget_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope3_id = _scope_id();
				_html("<b>A</b>");
				$scope1_page && $wi__input_kind && _scope($scope3_id, {}, "__tests__/template.marko", "3:6");
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_patch_text($scope2_id, "#text/0", input.kind, 2, $scope0_reason, 0)}</i>`);
				$cg__input_kind && _patch_init($scope2_id, "__tests__/template.marko_2_input_kind#0:3/init");
				$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: $wi__input_kind && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_kind/4": $wi__input_kind && 1
				}, "__tests__/template.marko", "4:6"), $cg__input_kind && "__tests__/template.marko_2_input_kind#0:3/subscribe");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_kind, void 0, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 0);
		$scope1_page && $wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_kind && "__tests__/template.marko_1_input_kind#0:3/subscribe", $wg__input_kind);
		$wg__input_kind || $wi__input_kind && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_kind/4": $wi__input_kind && _unfilled_if($scope0_reason, 0) && $input_kind__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
