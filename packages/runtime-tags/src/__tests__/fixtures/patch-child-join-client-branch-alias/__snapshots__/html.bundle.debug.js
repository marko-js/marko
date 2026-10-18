// tags/child.marko
const $template$1 = "<em> </em><!><!>";
const $walks$1 = "D l%c";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;D l%;<em> </em><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.a, void 0, $scope0_reason, 3)}</em>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:6_a#0:6/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 4);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, 1);
	_patch_write($scope0_id, "PatchWrite:input_b", input.b, 1);
	$scope0_page ? _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) : (_filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/unpatched", input.a) : _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1/unpatched", input.b) : _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1", input.b, !_server_guard($scope0_reason, 5))));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_set_scope_reason(614 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11));
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		a: input.a,
		b: input.b,
		show: s
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}<button class=s>s</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", s, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		s,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		s: "2:6"
	});
}, 1);
