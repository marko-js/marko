// tags/text-view.marko
const $template$1 = "<output> </output>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/text-view.marko": "__tests__/tags/text-view.marko;D ;<output> </output>" });
var text_view_default = _template("__tests__/tags/text-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output>${_text_resume($scope0_id, "#text/0", input.get(), 1, $scope0_reason, 0)}</output>`);
	_scope($scope0_id, {}, "__tests__/tags/text-view.marko", 0);
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
	_set_scope_reason(6);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	text_view_default({ get: upper ? up : low });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_init_entry($scope0_id, "__tests__/template.marko_0_upper#5_up#6_low#7/init", _filled_guard($scope0_reason, 0) && "up", _filled_guard($scope0_reason, 0) && "low");
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
