// tags/keeper.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button>toggle</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let content = input.content;
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", content, {});
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "1:108");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill0", content, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill1", show, 1);
	_scope($scope0_id, {
		content,
		show
	}, "__tests__/tags/keeper.marko", 0, {
		content: "1:6",
		show: "1:34"
	}) || _content_withhold(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 0), $wi__input_prefix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	keeper_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid)}>${_text_resume($scope1_id, "#text/1", input.prefix + " " + uid, $wg__input_prefix)}</label><input${_attr("id", uid)}${_attr("title", input.prefix + " " + uid)}>${_el_resume($scope1_id, "#input/2", $wg__input_prefix)}`);
		_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope1_id, {
			uid: $wi__input_prefix && uid,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { uid: "1:13" }), "__tests__/template.marko_1_input_prefix#0:4/subscribe", $wg__input_prefix);
		$wg__input_prefix || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	keeper_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		const uid = _id("uid~1");
		_html(`<label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/1", input.prefix + " " + uid, $wg__input_prefix)}</label><input${_attr("id", uid)}${_attr("title", input.prefix + " " + uid)}>${_el_resume($scope2_id, "#input/2", $wg__input_prefix)}`);
		_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope2_id, {
			uid: $wi__input_prefix && uid,
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_prefix/5": $wi__input_prefix && 1
		}, "__tests__/template.marko", "2:2", { uid: "2:13" }), "__tests__/template.marko_2_input_prefix#0:4/subscribe", $wg__input_prefix);
		$wg__input_prefix || _resume_branch($scope2_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		input_prefix: input.prefix,
		"ClosureScopes:input_prefix/5": $wi__input_prefix && $input_prefix__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_prefix: ["input.prefix"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.prefix, !_server_guard($scope0_reason, 0));
}, 1);
