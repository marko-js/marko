// child.marko
const $template$1 = "<span class=child>child <!></span>";
const $walks$1 = "Db%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;Db%;<span class=child>child <!></span>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_patch_text($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell !__tests__/template.marko_1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			const X = $Child_withLoadAssets;
			_html(`<button>${_text_resume($scope1_id, "#text/1", n)}</button>${_el_resume($scope1_id, "#button/0")}`);
			const $childScope = _peek_scope_id();
			if ($scope0_page || _must_render(X)) {
				_set_serialize_reason(2);
				_patch_child($scope1_id, "#childScope/3", $childScope);
				X({ label: n });
			}
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko_fill0", n, 1);
			_scope($scope1_id, {
				n,
				"#childScope/3": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4", { n: "5:10" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [X]);
