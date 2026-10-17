// tags/child.marko
const $template$1 = "<!><!><p> </p><button class=t>t</button>";
const $walks$1 = "b%bD l b";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;b%bD l ;<!><!><p> </p><button class=t>t</button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "#text/0", input.a, $wg__input_a)}</i>`);
			_scope($scope1_id, {}, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	const x = input.a + input.c;
	_html(`<p>${_patch_text($scope0_id, "#text/1", x, void 0, $scope0_reason, 0)}</p><button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_c", input.c, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_a#5_input_c#6/init");
	_patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_a: input.a,
		input_c: _write_if($scope0_reason, 1) && input.c,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_c: ["input.c"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/unpatched", input.a) : _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0", input.a, !_server_guard($scope0_reason, 1))), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1", input.c, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.a,
		c: n
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		a: input.a,
		c: input.c
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
