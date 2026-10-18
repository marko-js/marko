// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content,",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell; b ;<div></div><section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_b__OR__input_a__OR__input_mode = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__c__closures = new Set();
			const c = input.b + "!";
			_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
			const frag = { content: _content_resume("__tests__/tags/child.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.a + c, void 0, $scope0_reason, 0)}</em>`);
				(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5/subscribe");
				(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/tags/child.marko_2_c#1:2/subscribe");
				_patch_join_init($scope2_id, "__tests__/tags/child.marko_2_input_a#0:5_c#1:2/init", $scope0_reason, 0);
				_subscribe(_unfilled_if($scope0_reason, 4) && $if_content__c__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_a__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "5:4")));
			}, $scope1_id) };
			_html("<section>");
			_patch_attr_content("#section/1", $scope1_id, input.mode ? frag.content : null, void 0, $scope0_reason, 6);
			_html(`</section>${_el_resume($scope1_id, "#section/1", _mask_group($scope0_reason, 6))}`);
			_script($scope1_id, "__tests__/tags/child.marko_1_c#2", 1, _client_guard($scope0_reason, 4));
			_server_guard($scope0_reason, 4) && _patch_effect($scope1_id, "PatchEffect:__tests__/tags/child.marko_1_c#2", "c");
			_filled_guard($scope0_reason, 4) && (_content_withheld("__tests__/tags/child.marko_2*content", _client_guard($scope0_reason, 6)) ? _patch_value($scope1_id, "PatchValue:__tests__/tags/child.marko_fill3/unpatched", c) : _patch_write($scope1_id, "PatchWrite:c", c, !_server_guard($scope0_reason, 4)));
			_patch_write($scope1_id, "PatchWrite:frag_content", frag?.content, 1);
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/init");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_mode#0:6_frag_content#4/init");
			_scope($scope1_id, {
				c,
				frag_content: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3)) && frag?.content,
				_: $wi__input_show__OR__input_b__OR__input_a__OR__input_mode && _scope_with_id($scope0_id),
				"ClosureScopes:c/10": _write_if($scope0_reason, 4) && $if_content__c__closures
			}, "__tests__/tags/child.marko", "1:2", {
				c: "2:10",
				frag_content: ["frag.content", "5:11"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 3);
	_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 3) || _content_withheld("__tests__/tags/child.marko_2*content", _client_guard($scope0_reason, 6))) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	$scope0_page ? _scope($scope0_id, {
		input_b: _write_if($scope0_reason, 3) && input.b,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_mode: _unfilled_if($scope0_reason, 3) && input.mode,
		"ClosureScopes:input_a/8": _write_if($scope0_reason, 5) && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"],
		input_mode: ["input.mode"]
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill2", input.mode, !_server_guard($scope0_reason, 6)));
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
	_set_scope_reason(10366 | (_mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: n,
		b: input.x,
		show: input.show,
		mode: m
	});
	_set_scope_reason(8312 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 3) << 11));
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
