// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let items = input.items;
	const Body = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", v + input.w, 1, (_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_w && $input_w__closures, _scope($scope1_id, {
			v: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope1_reason, 0)) && v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { v: "2:15" }), _client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && "__tests__/template.marko_1_input_w#0:4/subscribe");
	}, $scope0_id) };
	_for_of(items, (v) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		Body.content({ v });
		_patch_child_end();
		_scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0");
	_scope($scope0_id, {
		input_w: input.w,
		"ClosureScopes:input_w/6": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, { input_w: ["input.w"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
