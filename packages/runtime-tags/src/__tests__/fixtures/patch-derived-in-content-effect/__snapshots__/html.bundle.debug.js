// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const label = input.label;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope0_reason, 0));
		_html(`<p></p>${_el_resume($scope1_id, "#p/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_label#1");
		_filled_guard($scope0_reason, 0) && _patch_effect($scope1_id, $cg__input_label ? "PatchQueuedEffect:__tests__/template.marko_1_label#1" : "PatchEffect:__tests__/template.marko_1_label#1", "label");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			label,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { label: "2:10" }), $cg__input_label && "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_label/4": $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
