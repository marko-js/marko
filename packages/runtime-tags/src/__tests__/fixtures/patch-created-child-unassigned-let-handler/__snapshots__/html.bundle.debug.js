// tags/child.marko
const $template$1 = "<em> </em><button>set</button>";
const $walks$1 = "D l b";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0_x_length#6;D l ;<em> </em><button>set</button>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.foo;
	let count = 0;
	_html(`<em>${_text_resume($scope0_id, "#text/0", count)}</em><button>set</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_x_length#6");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:x_length", x?.length, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1", count, 1);
	$scope0_page && _scope($scope0_id, { x_length: x?.length }, "__tests__/tags/child.marko", 0, { x_length: ["x.length", "1:6"] });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			child_default({ foo: input.foo });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_foo: _unfilled_if($scope0_reason, 0) && input.foo }, "__tests__/template.marko", 0, { input_foo: ["input.foo"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.foo, !_server_guard($scope0_reason, 1));
}, 1);
