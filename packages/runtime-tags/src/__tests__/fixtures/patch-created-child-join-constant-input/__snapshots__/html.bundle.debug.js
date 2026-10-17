// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D ;<p> </p>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2)));
	_patch_write($scope0_id, "PatchWrite:input_b", input.b, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	_patch_join_init($scope0_id, "__tests__/tags/child.marko_0_input_a#3_input_b#4/init", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	}, "__tests__/tags/child.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
});

// template.marko
const $template = "<!><!><button class=n>+</button>";
const $walks = "b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=n>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/init;${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(34);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			child_default({
				a: "x",
				b: n
			});
			_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1");
			child_default({
				a: input.y,
				b: n
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_y: _unfilled_if($scope0_reason, 0) && input.y,
		n
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 1));
}, 1);
