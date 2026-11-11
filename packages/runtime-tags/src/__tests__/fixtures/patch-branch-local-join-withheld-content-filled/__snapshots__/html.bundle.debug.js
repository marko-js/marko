// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;D lD ;<em> </em><i> </i>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell; ;<section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 5), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 4), $sg__input_b = _server_guard($scope0_reason, 5), $ui__input_show__OR__input_b__OR__input_mode = _unfilled_if($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 5), $fg__input_mode = _filled_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_a__OR__input_mode = _unfilled_if($scope0_reason, 1), $ui__input_mode = _unfilled_if($scope0_reason, 7);
			const $if_content__c__closures = new Set();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 5) && $ui__input_a__OR__input_mode && _patch_write($scope1_id, "PatchMarkedWrite:c", c, !$sg__input_b) && _patch_subscribers($scope1_id, "__tests__/tags/child.marko_1_c#1/subscribers", "c");
			const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_mark($scope2_id, "#text/0", input.a + c, 1, $scope0_reason, 0)}</em><i>${_text_mark($scope2_id, "#text/1", c, 1, $scope0_reason, 5)}</i>`);
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5/subscribe");
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/tags/child.marko_2_c#1:1/subscribe", $cg__input_b);
				_patch_render($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5_c#1:1/setup", ((_filled_guard($scope0_reason, 6) ? " >>input_a" : "") + (_filled_guard($scope0_reason, 5) ? " >c" : "")).slice(1), $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 5) && $if_content__c__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4"), _client_guard($scope0_reason, 6) && "__tests__/tags/child.marko_2_input_a#0:5/subscribe"), $cg__input_b && "__tests__/tags/child.marko_2_c#1:1/subscribe");
			}, $scope1_id) };
			_html("<section>");
			_attr_content("#section/0", $scope1_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 7);
			_html(`</section>${_el_mark($scope1_id, "#section/0", _updates_from($scope0_reason, 7))}`);
			$ui__input_mode && _patch_write($scope1_id, "PatchWrite:frag_content", frag.content, 1);
			$cg__input_b && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/setup");
			_client_guard($scope0_reason, 7) && _patch_render($scope1_id, "__tests__/tags/child.marko_1_input_mode#0:6_frag_content#3/setup");
			_scope($scope1_id, {
				c: ($ui__input_a__OR__input_mode || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && c,
				frag_content: $ui__input_mode && frag.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				"ClosureScopes:c/10": _write_if($scope0_reason, 5) && $if_content__c__closures
			}, "__tests__/tags/child.marko", "1:2", {
				c: "2:10",
				frag_content: ["frag.content", "3:11"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 4);
	$fg__input_b && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_b#0:4/setup", "input_b");
	$fg__input_mode && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/child.marko_1_input_mode#0:6/setup", "input_mode");
	_scope($scope0_id, {
		input_b: ($ui__input_show || _unfilled_if($scope0_reason, 5)) && input.b,
		input_a: ($ui__input_show__OR__input_b__OR__input_mode || _unfilled_if($scope0_reason, 0)) && input.a,
		input_mode: ($ui__input_show || _unfilled_if($scope0_reason, 7)) && input.mode,
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 6) && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"],
		input_mode: ["input.mode"]
	}) || ($fg__input_b && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !$sg__input_b), _filled_guard($scope0_reason, 6) && $ui__input_show__OR__input_b__OR__input_mode && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 6)) && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_a#5/subscribers", "input_a"), $fg__input_mode && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_mode", input.mode, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 2), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(41454 | ($uf__input_show << 9 | $uf__input_x << 11));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_patch_child_end();
	_set_scope_reason(33272 | (_updates_from($scope0_reason, 0) << 1 | $uf__input_show << 9 | $uf__input_x << 11 | _updates_from($scope0_reason, 3) << 13));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
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
