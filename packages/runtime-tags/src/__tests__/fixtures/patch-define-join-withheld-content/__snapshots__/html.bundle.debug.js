// tags/child.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content;D ;<em> </em>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko; ;<section></section>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 6), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const frag = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 0)}</em>`);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:3/subscribe");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4/subscribe");
		_patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:3_input_b#0:4/init", $scope0_reason, 0, _filled_guard($scope0_reason, 4) && ">input_a", _filled_guard($scope0_reason, 5) && ">input_b");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2")));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 6);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 6))}`);
	_filled_guard($scope0_reason, 4) && (_content_withheld("__tests__/tags/child.marko_1*content", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5)));
	_filled_guard($scope0_reason, 5) && (_content_withheld("__tests__/tags/child.marko_1*content", $scope0_id) || $cg__input_mode) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_mode#5_frag_content#7/init");
	$scope0_page && _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		frag_content: _unfilled_if($scope0_reason, 6) && frag?.content,
		"ClosureScopes:input_a/9": _write_if($scope0_reason, 4) && $input_a__closures,
		"ClosureScopes:input_b/10": _write_if($scope0_reason, 5) && $input_b__closures
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		frag_content: ["frag.content", "1:9"]
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(9198 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: n,
		b: input.x,
		mode: m
	});
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		a: input.y,
		b: input.x,
		mode: m
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=m>m</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
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
