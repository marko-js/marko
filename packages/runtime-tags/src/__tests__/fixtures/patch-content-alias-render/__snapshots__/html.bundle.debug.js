// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks$1)};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({
		title: input.title,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_note#0:4/subscribe");
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_note/5": $wi__input_note && _unfilled_if($scope0_reason, 1) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
