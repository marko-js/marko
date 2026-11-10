// tags/child.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": `__tests__/tags/child.marko_1*shell #childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template)}`,
	"__tests__/tags/child.marko_3*shell": "__tests__/tags/child.marko_3*shell;D ;<span> </span>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_on = _client_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 1), $fg__input_y = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const D = { content: _content("__tests__/tags/child.marko_2*content", ({ x }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__x = _write_guard($scope2_reason, 0), $wi__x = _write_if($scope2_reason, 0);
				_if(() => {
					if (x) {
						const $scope3_id = _scope_id();
						_html(`<span>${_text_mark($scope3_id, "#text/0", input.on, 1, $scope0_reason, 1)}</span>`);
						$cg__input_on && _patch_render($scope3_id, "__tests__/tags/child.marko_3_input_on#0:3/subscribe");
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_on__closures, _scope($scope3_id, { _: ($wi__input_on || $wi__x) && _scope_with_id($scope2_id) }, "__tests__/tags/child.marko", "3:6"), $cg__input_on && "__tests__/tags/child.marko_3_input_on#0:3/subscribe");
						return 0;
					}
				}, $scope2_id, "#text/0", 1, $wg__x, 1, 0, 0, ["__tests__/tags/child.marko_3*shell"], $scope2_reason, 0);
				($wi__input_on || $wi__x) && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "2:4");
			}, $scope1_id, 0) };
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			D.content({ x: input.y });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_y#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 1);
	$fg__input_on && $cg__input_on && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_on#3/subscribers", "input_on");
	$fg__input_y && $cg__input_on && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_y#0:4/setup", "input_y");
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.on,
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		"ClosureScopes:input_on/5": $wi__input_on && $input_on__closures
	}, "__tests__/tags/child.marko", 0, {
		input_on: ["input.on"],
		input_y: ["input.y"]
	}) || ($fg__input_on && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 1)), $fg__input_y && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		on: input.on,
		y
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
