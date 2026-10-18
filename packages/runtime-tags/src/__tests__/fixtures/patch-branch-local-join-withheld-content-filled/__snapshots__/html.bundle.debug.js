// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content,",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell !; ;<section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = new Set();
			const c = input.b + "!";
			const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.a + c, void 0, $scope0_reason, 0)}</em><i>${_patch_text($scope2_id, "#text/1", c, void 0, $scope0_reason, 5)}</i>`);
				(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5/subscribe");
				(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, _client_guard($scope0_reason, 5) ? "__tests__/tags/child.marko_2_c#1:1/init" : "__tests__/tags/child.marko_2_c#1:1/subscribe");
				_patch_join_init($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5_c#1:1/init", $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 5) && $if_content__c__closures, _subscribe(_unfilled_if($scope0_reason, 6) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "3:4")));
			}, $scope1_id) };
			_html("<section>");
			_patch_attr_content("#section/0", $scope1_id, input.mode ? frag.content : null, void 0, $scope0_reason, 7);
			_html(`</section>${_el_resume($scope1_id, "#section/0", _mask_group($scope0_reason, 7))}`);
			_filled_guard($scope0_reason, 5) ? _content_withheld("__tests__/tags/child.marko_2*content", _client_guard($scope0_reason, 7)) ? _patch_value($scope1_id, "PatchValue:__tests__/tags/child.marko_fill3/unpatched", c) : (_client_guard($scope0_reason, 6) || _content_withheld("__tests__/tags/child.marko_2*content", _client_guard($scope0_reason, 7))) && _patch_value($scope1_id, "PatchValue:__tests__/tags/child.marko_fill3", c) : _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/init");
			_patch_write($scope1_id, "PatchWrite:frag_content", frag?.content, 1);
			_client_guard($scope0_reason, 7) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_mode#0:6_frag_content#3/init");
			_scope($scope1_id, {
				c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && c,
				frag_content: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 4)) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				"ClosureScopes:c/10": _write_if($scope0_reason, 5) && $if_content__c__closures
			}, "__tests__/tags/child.marko", "1:2", {
				c: "2:10",
				frag_content: ["frag.content", "3:11"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 4);
	_filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) || _content_withheld("__tests__/tags/child.marko_2*content", _client_guard($scope0_reason, 7))) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5)));
	$scope0_page ? _scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_mode: _unfilled_if($scope0_reason, 4) && input.mode,
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 6) && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"],
		input_mode: ["input.mode"]
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill2", input.mode, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(41454 | (_mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_set_scope_reason(33272 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11 | _mask_group($scope0_reason, 3) << 13));
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		a: input.y,
		b: input.x,
		show: input.show,
		mode: m
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=m>m</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", m, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		m,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		m: "2:6"
	});
}, 1);
