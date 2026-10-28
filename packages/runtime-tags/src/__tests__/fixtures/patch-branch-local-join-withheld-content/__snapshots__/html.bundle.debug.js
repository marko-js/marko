// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;D ;<em> </em>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell !;D l ;<p> </p><section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 7), $cg__input_mode = _client_guard($scope0_reason, 8), $wg__input_show = _write_guard($scope0_reason, 5), $sg__input_b = _server_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $cg__input_b = _client_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = new Set();
			const c = input.b + "!";
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.a + c, 1, $scope0_reason, 1)}</p>`);
			const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_resume($scope2_id, "#text/0", c, 1, $scope0_reason, 6)}</em>`);
				_unfilled_if($scope0_reason, 6) && _patch_init($scope2_id, $cg__input_b ? "__tests__/tags/child.marko_2_c#1:2/init" : "__tests__/tags/child.marko_2_c#1:2/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 6) && $if_content__c__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "4:4"));
			}, $scope1_id) };
			_html("<section>");
			_attr_content("#section/1", $scope1_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 8);
			_html(`</section>${_el_resume($scope1_id, "#section/1", _mask_group($scope0_reason, 8))}`);
			_filled_guard($scope0_reason, 6) ? ($cg__input_a || _content_withheld("__tests__/tags/child.marko_2*content", $scope1_id) || $cg__input_mode) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/child.marko_fill3", c) : _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/init");
			$cg__input_mode && _patch_write($scope1_id, "PatchWrite:frag_content", frag?.content, 1);
			_patch_init_entry($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_c#2/init", [_filled_guard($scope0_reason, 7) && ">input_a", _filled_guard($scope0_reason, 6) && "c"], $scope0_reason, 1);
			$cg__input_mode && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_mode#0:6_frag_content#5/init");
			_scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 6)) && c,
				frag_content: (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 5)) && frag?.content,
				_: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id),
				"ClosureScopes:c/10": _write_if($scope0_reason, 6) && $if_content__c__closures
			}, "__tests__/tags/child.marko", "1:2", {
				c: "2:10",
				frag_content: ["frag.content", "4:11"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 5);
	_filled_guard($scope0_reason, 7) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 7) && $cg__input_b));
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a,
		input_mode: _unfilled_if($scope0_reason, 5) && input.mode
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"],
		input_mode: ["input.mode"]
	}) || (_filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !$sg__input_b), _filled_guard($scope0_reason, 8) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill2", input.mode, !_server_guard($scope0_reason, 8)), $cg__input_show && _content_withhold(input.mode));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(165624 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 2) << 13));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(133088 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 2) << 13 | _mask_group($scope0_reason, 4) << 15));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=m>m</button>${_el_resume($scope0_id, "#button/3")}`);
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
