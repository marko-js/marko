// tags/child.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content;D ;<em> </em>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko; ;<section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 4), $fg__input_b = _filled_guard($scope0_reason, 5), $cg__input_mode = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const frag = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.a + input.b, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/tags/child.marko_1_input_a#0:3/subscribe");
		_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/subscribe");
		_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_a#0:3_input_b#0:4/setup", [_filled_guard($scope0_reason, 4) && ">input_a", _filled_guard($scope0_reason, 5) && ">input_b"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2")));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 6);
	_html(`</section>${_el_mark($scope0_id, "#section/0", _updates_from($scope0_reason, 6))}`);
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$fg__input_a && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_a#3/subscribers", "input_a");
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_b#4/subscribers", "input_b");
	$cg__input_mode && _patch_render($scope0_id, "__tests__/tags/child.marko_0_input_mode#5_frag_content#7/setup");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		frag_content: _unfilled_if($scope0_reason, 6) && frag?.content,
		"ClosureScopes:input_a/9": _write_if($scope0_reason, 4) && $input_a__closures,
		"ClosureScopes:input_b/10": _write_if($scope0_reason, 5) && $input_b__closures
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		frag_content: ["frag.content", "1:9"]
	}) || ($fg__input_a && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 4)), $fg__input_b && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(9198 | _updates_from($scope0_reason, 1) << 11);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(8696 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 9 | _updates_from($scope0_reason, 1) << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/2")}<button class=m>m</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		m,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		m: "2:6"
	});
}, 1);
