// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell !__tests__/template.marko_1_input_attrs#4;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<div>x</div><!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div${_patch_attrs(input.attrs, "#div/0", $scope1_id, "div", void 0, $scope0_reason, 2)}>x</div>${_el_resume($scope1_id, "#div/0")}`);
			_set_serialize_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/2", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#4");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/2": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4", { "EventAttributes:#div/0": ["...input.attrs", "5:13"] });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { input_label: _source_if($scope0_reason, 1) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1, () => [$Child_withLoadAssets]);
