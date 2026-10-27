// tags/layout.marko
const $template$1 = "<main><!></main>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/layout.marko": "__tests__/tags/layout.marko;D%;<main><!></main>" });
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<html><body>${_w0}</body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E/${_w0}&m`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `E/${_w0}&m`)("D%l")};${((_w0) => `<html><body>${_w0}</body></html>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html(`<html>${_flush_head()}<body>`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	layout_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/1", n, 2)}</p><button>+</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			n,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:6", { n: "4:12" }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id) });
	_patch_child_end();
	_trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_label/4": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
