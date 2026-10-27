// tags/card/index.marko
const $template$1 = "<section><header><!></header><footer><!></footer></section>";
const $walks$1 = "E%lD%m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E%lD%;<section><header><!></header><footer><!></footer></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 1), $wg__input_footer = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	_dynamic_tag($scope0_id, "#text/0", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 1);
	_html("</header><footer>");
	_dynamic_tag($scope0_id, "#text/1", input.footer, {}, 10, 0, 0, $wg__input_footer, $scope0_reason, 2);
	_html("</footer></section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks$1)};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_h = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_h__closures = new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		header: attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "#text/0", input.h, void 0, $scope0_reason, 0)}</b>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_h__closures, _scope($scope1_id, { _: $wi__input_h && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_h#0:3/subscribe");
		}, $scope0_id) }),
		footer: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html("static");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_h/4": $wi__input_h && _unfilled_if($scope0_reason, 0) && $input_h__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
