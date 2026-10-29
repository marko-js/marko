// tags/label-view.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-view.marko": "__tests__/tags/label-view.marko !;D ;<p> </p>" });
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<p>${_text_resume($scope0_id, "#text/0", get(), 1, $scope0_reason, 3)}</p>`);
	_client_guard($scope0_reason, 3) && _patch_init($scope0_id, "__tests__/tags/label-view.marko_0_input_flag#3_input_a#4_input_b#5/init");
	_scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.flag,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.b
	}, "__tests__/tags/label-view.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/label-view.marko_fill0", input.flag, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/label-view.marko_fill1", input.a, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/label-view.marko_fill2", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)("D l")};${((_w0) => `${_w0}<button>toggle</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(6630);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_view_default({
		a: upper ? up : low,
		b: _resume(() => "x", "__tests__/template.marko_0/b"),
		flag: true
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_init_entry($scope0_id, "__tests__/template.marko_0_upper#5_up#6_low#7/init", [_filled_guard($scope0_reason, 0) && "up", _filled_guard($scope0_reason, 0) && "low"]);
	_scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8"
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
