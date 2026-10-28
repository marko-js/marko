// tags/child.marko
const $template$1 = "<!><!><section></section>";
const $walks$1 = "b%b b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;D ;<em> </em>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%b ;<!><!><section></section>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 4), $cg__input_mode = _client_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_input_b#0:6/init", $scope0_reason, 1, _filled_guard($scope0_reason, 5) && ">input_a", _filled_guard($scope0_reason, 6) && ">input_b");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 4), 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 4);
	const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_text_resume($scope2_id, "#text/0", input.a, 1, $scope0_reason, 5)}</em>`);
		_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, $cg__input_a ? "__tests__/tags/child.marko_2_input_a#0:5/init" : "__tests__/tags/child.marko_2_input_a#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "4:2"));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("#section/1", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 7);
	_html(`</section>${_el_resume($scope0_id, "#section/1", _mask_group($scope0_reason, 7))}`);
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 6) && $cg__input_a));
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_mode#7_frag_content#9/init");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		frag_content: _unfilled_if($scope0_reason, 7) && frag?.content,
		"ClosureScopes:input_a/11": _write_if($scope0_reason, 5) && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		frag_content: ["frag.content", "4:9"]
	}) || _filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : (_client_guard($scope0_reason, 6) || _content_withheld("__tests__/tags/child.marko_2*content", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	let m = true;
	_set_scope_reason(41726 | _mask_group($scope0_reason, 2) << 11);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: input.a,
		b: n,
		show: s,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(33248 | (_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 9 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 13));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.a,
		b: input.b,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=m>m</button>${_el_resume($scope0_id, "#button/3")}<button class=s>s</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		s,
		m,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		s: "2:6",
		m: "3:6"
	});
}, 1);
