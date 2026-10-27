// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = $global$1.g + "!";
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + input.b + c, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("__tests__/tags/child.marko_1_$global_g#0:8", $scope1_id);
			_client_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchWrite:c", c, 1);
			_client_guard((2 | _mask_group($scope0_reason, 0)) << 1, 0) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:4_input_b#0:5_c#1/init");
			$scope0_page && _scope($scope1_id, {
				c: _unfilled_if($scope0_reason, 0) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/tags/child.marko", "1:2", { c: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", input.b, !_server_guard($scope0_reason, 4))));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | (_mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 9));
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
