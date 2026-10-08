// v:template.marko.module.css
var v_template_marko_module_default = "\n  .content {\n    color: green;\n  }\n";

// template.marko
const $template = /*@__PURE__*/ (() => `<div class="${void 0}"> </div><!><!>`)();
const $walks = "D l%c";
const $class = _attr_class(void 0);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;D l%;${(() => `<div class="${void 0}"> </div><!><!>`)()}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell,${/*@__PURE__*/ (() => `<span class="${void 0}"></span>`)()}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${$class}>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</div>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${$class}></span>`);
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
