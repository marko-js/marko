// tags/picker.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/picker.marko_2*content": "__tests__/tags/picker.marko_2*content;D ;<h5> </h5>",
	"__tests__/tags/picker.marko_1*content": "__tests__/tags/picker.marko_1*content;D ;<h4> </h4>",
	"__tests__/tags/picker.marko": "__tests__/tags/picker.marko !;b%;<!><!><!>"
});
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $cg__input_record = _client_guard($scope0_reason, 2), $cg__input_useA = _client_guard($scope0_reason, 1), $cg__input_useA__OR__input_record = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/tags/picker.marko_1*content", ({ record }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<h4>${_patch_text($scope1_id, "#text/0", record.name)}</h4>`);
		$scope1_page && _scope($scope1_id, {}, "__tests__/tags/picker.marko", "1:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/tags/picker.marko_2*content", ({ record }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<h5>${_patch_text($scope2_id, "#text/0", record.name)}</h5>`);
		$scope2_page && _scope($scope2_id, {}, "__tests__/tags/picker.marko", "4:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.useA ? Card : Other, { record: input.record }, 1, 0, 0, $wg__input_useA__OR__input_record, $scope0_reason, 0);
	$cg__input_useA__OR__input_record && _patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	$cg__input_useA__OR__input_record && _patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	$cg__input_useA__OR__input_record && _patch_init($scope0_id, "__tests__/tags/picker.marko_0_input_useA#3_input_record#4_Card#5_Other#6/init");
	$scope0_page ? _scope($scope0_id, {
		input_useA: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		input_record: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.record,
		Card: _unfilled_if($scope0_reason, 0) && Card,
		Other: _unfilled_if($scope0_reason, 0) && Other
	}, "__tests__/tags/picker.marko", 0, {
		input_useA: ["input.useA"],
		input_record: ["input.record"],
		Card: "1:9",
		Other: "4:9"
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_record && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill0", input.useA, !_server_guard($scope0_reason, 1)), $cg__input_record && _content_withhold(input.useA), _filled_guard($scope0_reason, 2) && $cg__input_useA && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill1", input.record, !_server_guard($scope0_reason, 2)), $cg__input_useA && _content_withhold(input.record));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	picker_default({
		useA: input.useA,
		record: input.record
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
