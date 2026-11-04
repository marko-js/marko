// tags/picker.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b1: "b1;D ;<h5> </h5>",
	b0: "b0;D ;<h4> </h4>",
	b: "b;b%;<!><!><!>"
});
var picker_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $cg__input_useA__OR__input_record = _client_guard($scope0_reason, 0), $fg__input_useA = _filled_guard($scope0_reason, 1), $fg__input_record = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("b0", ({ record }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_text_mark($scope1_id, "a", record.name, 1, 4, 0)}</h4>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("b1", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_text_mark($scope2_id, "a", record.name, 1, 4, 0)}</h5>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "a", input.useA ? Card : Other, { record: input.record }, 1, 0, 0, $wg__input_useA__OR__input_record, $scope0_reason, 0);
	$cg__input_useA__OR__input_record && _patch_write($scope0_id, "wf", Card, 1);
	$cg__input_useA__OR__input_record && _patch_write($scope0_id, "wg", Other, 1);
	_patch_render($scope0_id, "b2", [$fg__input_useA && "d", $fg__input_record && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.record,
		f: _unfilled_if($scope0_reason, 0) && Card,
		g: _unfilled_if($scope0_reason, 0) && Other
	}) || ($fg__input_useA && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.useA, !_server_guard($scope0_reason, 1)), $fg__input_record && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.record, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	picker_default({
		useA: input.useA,
		record: input.record
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
