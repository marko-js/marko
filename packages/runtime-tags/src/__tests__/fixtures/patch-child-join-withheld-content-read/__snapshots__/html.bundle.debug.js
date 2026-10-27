// tags/child.marko
const $template$1 = "<section></section><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content;D ;<i> </i>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !; b%;<section></section><!><!>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_mode = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const frag = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<i>${_patch_text($scope1_id, "#text/0", input.a, void 0, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_a ? "__tests__/tags/child.marko_1_input_a#0:4/init" : "__tests__/tags/child.marko_1_input_a#0:4/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2"));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 4))}`);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope2_id, "__tests__/tags/child.marko_2_input_a#0:4_input_b#0:6/init", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">input_a", _filled_guard($scope0_reason, 5) && ">input_b");
			$scope0_page && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["__tests__/tags/child.marko_2*shell"], $scope0_reason, 5);
	$cg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 5) && $cg__input_a));
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_mode#5_frag_content#8/init");
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.b,
		frag_content: _unfilled_if($scope0_reason, 4) && frag?.content,
		"ClosureScopes:input_a/10": _write_if($scope0_reason, 3) && $input_a__closures
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		frag_content: ["frag.content", "1:9"]
	}) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 5) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : (_content_withheld("__tests__/tags/child.marko_1*content", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let m = true;
	let n = "";
	_set_scope_reason(614 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.x,
		b: input.y,
		mode: m
	});
	_set_scope_reason(2622 | _mask_group($scope0_reason, 1) << 7);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		a: input.x,
		b: n,
		mode: m
	});
	_html(`<button class=m>m</button>${_el_resume($scope0_id, "#button/2")}<button class=n>n</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		m,
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		m: "1:6",
		n: "2:6"
	});
}, 1);
