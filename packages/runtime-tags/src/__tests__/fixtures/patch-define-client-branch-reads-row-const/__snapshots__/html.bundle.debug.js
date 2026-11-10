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
	const $scope0_reason = _scope_reason(), $cg__input_items__OR__input_v = _client_guard($scope0_reason, 0), $wi__input_items__OR__input_v = _write_if($scope0_reason, 0), $cg__input_on = _client_guard($scope0_reason, 4), $ui__input_items = _unfilled_if($scope0_reason, 2), $fg__input_v = _filled_guard($scope0_reason, 3), $fg__input_on = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 4), $ui__input_items__OR__input_v = _unfilled_if($scope0_reason, 0), $ui__input_v = _unfilled_if($scope0_reason, 3), $fg__input_items__OR__input_v = _filled_guard($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 2);
		const $for_content__v__closures = new Set();
		$fg__input_items && $ui__input_v && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 2));
		const v = `${item}${input.v}!`;
		$fg__input_items__OR__input_v && $ui__input_on && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !_server_guard($scope0_reason, 0));
		const D = { content: _content("__tests__/tags/child.marko_2*content", ({ on }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0), $wi__on = _write_if($scope2_reason, 0);
			_if(() => {
				if (on) {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_mark($scope3_id, "#text/0", v, 1, $scope0_reason, 0)}</span>`);
					$cg__input_items__OR__input_v && _patch_render($scope3_id, "__tests__/tags/child.marko_3_v#1:4/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__v__closures, _scope($scope3_id, { _: ($wi__input_items__OR__input_v || $wi__on) && _scope_with_id($scope2_id) }, "__tests__/tags/child.marko", "4:6"), $cg__input_items__OR__input_v && "__tests__/tags/child.marko_3_v#1:4/subscribe");
					return 0;
				}
			}, $scope2_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/tags/child.marko_3*shell"], $scope2_reason, 0);
			($wi__input_items__OR__input_v || $wi__on) && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4");
		}, $scope1_id, 0) };
		_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		D.content({ on: input.on });
		_patch_child_end();
		$fg__input_items__OR__input_v && $cg__input_on && _patch_subscribers($scope1_id, "__tests__/tags/child.marko_1_v#4/subscribers", "v");
		$cg__input_on && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_on#0:5/setup");
		_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_v#0:4_item#2/setup", ((_filled_guard($scope0_reason, 3) ? " >input_v" : "") + ($fg__input_items ? " item" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			item: ($ui__input_v || $ui__input_items__OR__input_v) && item,
			v: ($ui__input_on || $ui__input_items__OR__input_v) && v,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			"ClosureScopes:v/8": $wi__input_items__OR__input_v && $for_content__v__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/child.marko", "1:2", {
			item: "1:6",
			v: "2:10"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 2);
	$fg__input_v && $cg__input_items && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_v#0:4/setup", "input_v");
	$fg__input_on && $cg__input_items && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_on#0:5/setup", "input_on");
	_scope($scope0_id, {
		input_v: ($ui__input_items || _unfilled_if($scope0_reason, 0)) && input.v,
		input_on: ($ui__input_items || _unfilled_if($scope0_reason, 4)) && input.on
	}, "__tests__/tags/child.marko", 0, {
		input_v: ["input.v"],
		input_on: ["input.on"]
	}) || ($fg__input_v && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 3)), $fg__input_on && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 4)));
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
	_set_scope_reason(536 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 1) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
		v: input.v,
		items: input.items,
		on
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
