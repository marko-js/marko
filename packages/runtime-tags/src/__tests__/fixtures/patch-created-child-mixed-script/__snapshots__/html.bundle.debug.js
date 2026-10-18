// tags/child/index.marko
const $template$1 = "<p> </p><button>+</button>";
const $walks$1 = "D l b";
_shells({ "__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko __tests__/tags/child/index.marko_0_input_x#4_n#5/init!__tests__/tags/child/index.marko_0;D l ;<p> </p><button>+</button>" });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5", 1, 1);
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "PatchEffect:__tests__/tags/child/index.marko_0_input_x#4_n#5", "input_x");
	_patch_init($scope0_id, "__tests__/tags/child/index.marko_0_input_x#4_n#5/init", 1);
	_patch_value($scope0_id, "PatchValue:__tests__/tags/child/index.marko_fill0", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			child_default({ x: input.a });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_a: _unfilled_if($scope0_reason, 0) && input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
}, 1);
