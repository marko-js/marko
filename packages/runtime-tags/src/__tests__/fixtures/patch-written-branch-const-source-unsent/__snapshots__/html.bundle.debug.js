// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<b> </b>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 4), $cg__input_v = _client_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2), $sg__input_v = _server_guard($scope0_reason, 3), $fg__input_v2 = _filled_guard($scope0_reason, 3), $fg__input_on = _filled_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 4), $fg__input_v = _filled_guard($scope0_reason, 3);
			const v = input.v.toUpperCase();
			$fg__input_v && $ui__input_on && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !$sg__input_v);
			_if(() => {
				if (input.on) {
					const $scope2_id = _scope_id();
					_html(`<b>${_text_mark($scope2_id, "#text/0", v, 1, $scope0_reason, 3)}</b>`);
					$cg__input_v && _patch_render($scope2_id, "__tests__/tags/child.marko_2_v#1:1/setup");
					_scope($scope2_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_on, 1, 0, 0, ["__tests__/tags/child.marko_2*shell"], $scope0_reason, 4);
			$fg__input_v && $cg__input_on && _patch_render($scope1_id, "__tests__/tags/child.marko_2_v#1:1/setup", "v");
			$cg__input_v && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_v#0:4/setup");
			$cg__input_on && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_on#0:5/setup");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				v: ($ui__input_on || _unfilled_if($scope0_reason, 3)) && v,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { v: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	$fg__input_v2 && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_v#0:4/setup", "input_v");
	$fg__input_on && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_on#0:5/setup", "input_on");
	_scope($scope0_id, {
		input_v: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.v,
		input_on: ($ui__input_show || _unfilled_if($scope0_reason, 4)) && input.on
	}, "__tests__/tags/child.marko", 0, {
		input_v: ["input.v"],
		input_on: ["input.on"]
	}) || ($fg__input_v2 && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !$sg__input_v), $fg__input_on && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(542 | (_updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 1) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		show: input.show,
		v: input.v,
		on
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
