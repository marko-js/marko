// tags/wrapper.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/wrapper.marko_2*content": "__tests__/tags/wrapper.marko_2*content;D ;<p> </p>",
	"__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;b%;<!><!><!>"
});
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fallback = _write_guard($scope0_reason, 0), $cg__input_fallback = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $fg__input_fallback = _filled_guard($scope0_reason, 0), $wi__input_fallback = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "4:2"), $cg__input_fail && "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe");
	}, void 0, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.fallback, {}, 0, 0, 0, $wg__input_fallback);
		$cg__input_fallback && _patch_render($scope1_id, "__tests__/tags/wrapper.marko_1_input_fallback#0:3/subscribe");
		_subscribe($wi__input_fallback && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrapper.marko", "6:4"), $cg__input_fallback && "__tests__/tags/wrapper.marko_1_input_fallback#0:3/subscribe", $wg__input_fallback);
	}, 0, "__tests__/tags/wrapper.marko_1*content", "__tests__/tags/wrapper.marko_2*content", 1);
	$fg__input_fallback && _patch_subscribers($scope0_id, "__tests__/tags/wrapper.marko_0_input_fallback#3/subscribers", "input_fallback");
	_scope($scope0_id, {
		input_fallback: input.fallback,
		"ClosureScopes:input_fallback/5": $wi__input_fallback && $input_fallback__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/tags/wrapper.marko", 0, { input_fallback: ["input.fallback"] }) || $fg__input_fallback && _patch_write($scope0_id, "PatchMarkedWrite:input_fallback", input.fallback, !_server_guard($scope0_reason, 0));
});

// tags/panel.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/panel.marko_1*content": "__tests__/tags/panel.marko_1*content",
	"__tests__/tags/panel.marko": `__tests__/tags/panel.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("__tests__/tags/panel.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.a + input.b, 1, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:4/subscribe");
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/tags/panel.marko_1_input_b#0:5/subscribe");
			_patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/setup", [_filled_guard($scope0_reason, 2) && ">input_a", _filled_guard($scope0_reason, 3) && ">input_b"], $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "2:4"), _client_guard($scope0_reason, 2) && "__tests__/tags/panel.marko_1_input_a#0:4/subscribe"), _client_guard($scope0_reason, 3) && "__tests__/tags/panel.marko_1_input_b#0:5/subscribe");
		}, $scope0_id) })
	});
	_patch_child_end();
	$fg__input_a && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_a#4/subscribers", "input_a");
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_b#5/subscribers", "input_b");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		"ClosureScopes:input_a/6": _write_if($scope0_reason, 2) && $input_a__closures,
		"ClosureScopes:input_b/7": _write_if($scope0_reason, 3) && $input_b__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2)), $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(134 | (_updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		a: input.a,
		b: n,
		fail: input.fail
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	panel_default({
		a: input.a,
		b: input.b,
		fail: input.fail
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
