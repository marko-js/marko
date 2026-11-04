// tags/child.marko
const $R_content__walks = "b%b%c";
const $R_content__template = "<!><!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($R_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($R_content__walks);
const $setup$1 = [["#childScope/0>"], []];
_shells({
	"__tests__/tags/child.marko_1*content": `__tests__/tags/child.marko_1*content;${$R_content__walks};${$R_content__template}`,
	"__tests__/tags/child.marko": `__tests__/tags/child.marko #childScope/0>;${((_w0) => `b/${_w0}&%c`)($R_content__walks)};${((_w0) => `<!>${_w0}<!><!>`)($R_content__template)}`,
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<span> </span>",
	"__tests__/tags/child.marko_3*shell": `__tests__/tags/child.marko_3*shell >>#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template)}`,
	"__tests__/tags/child.marko_4*shell": `__tests__/tags/child.marko_4*shell >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($R_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($R_content__template)}`
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wi__input_v__OR__input_on = _write_if($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 2), $ui__input_on = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	const R = { content: _content("__tests__/tags/child.marko_1*content", ({ flip, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__flip__OR__depth = _write_if($scope1_reason, 0), $wg__flip = _write_guard($scope1_reason, 1), $wg__depth = _write_guard($scope1_reason, 2), $ui__depth = _unfilled_if($scope1_reason, 2);
		_if(() => {
			if (flip) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", input.v, 1, $scope0_reason, 1)}</span>`);
				$cg__input_v && _patch_render($scope2_id, "__tests__/tags/child.marko_2_input_v#0:4/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_v__closures, _scope($scope2_id, { _: ($wi__input_v__OR__input_on || $wi__flip__OR__depth) && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "2:4"), $cg__input_v && "__tests__/tags/child.marko_2_input_v#0:4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__flip, 1, 0, 0, ["__tests__/tags/child.marko_2*shell"], $scope1_reason, 1);
		_if(() => {
			if (depth) {
				const $scope3_id = _scope_id();
				_set_scope_reason(_updates_from($scope1_reason, 0) << 1 | _updates_from($scope1_reason, 1) << 3 | _updates_from($scope1_reason, 2) << 5);
				const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0, 0, $scope0_id);
				R.content({
					flip: !flip,
					depth: depth - 1
				});
				_patch_child_end();
				_scope($scope3_id, {
					_: ($wi__input_on || $wi__flip__OR__depth) && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/child.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $wg__depth, 1, 0, 0, ["__tests__/tags/child.marko_3*shell"], $scope1_reason, 2);
		$ui__depth && _patch_write($scope1_id, "PatchWrite:flip", flip, 1);
		($wi__input_v__OR__input_on || $wi__flip__OR__depth) && _scope($scope1_id, {
			flip: $ui__depth && flip,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { flip: "1:13" });
	}, $scope0_id, 0) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	R.content({ depth: 2 });
	_patch_child_end();
	_if(() => {
		if (input.on) {
			const $scope4_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope4_id, "#childScope/0", 2, 0, $scope0_id);
			R.content({
				flip: true,
				depth: 1
			});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_on && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/tags/child.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_on, 1, 0, 0, ["__tests__/tags/child.marko_4*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_v: $wi__input_on && ($ui__input_on || _unfilled_if($scope0_reason, 1)) && input.v,
		"ClosureScopes:input_v/6": _write_if($scope0_reason, 1) && $input_v__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/tags/child.marko", 0, { input_v: ["input.v"] }) || _filled_guard($scope0_reason, 1) && $ui__input_on && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 1)) && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_v#4/subscribers", "input_v");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks$1)};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	child_default({
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
