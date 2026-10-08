// styles.css.ts
const box = "box";

// template.marko
const $template = "<div></div><!><button> </button>";
const $walks = " b%b D l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%b D ;<div></div><!><button> </button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<span></span>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_patch_attr_class($scope0_id, "#div/0", "box", 0, 0)}></div>${_el_resume($scope0_id, "#div/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${_patch_attr_class($scope1_id, "#span/0", "box", 0, 0)}></span>${_el_resume($scope1_id, "#span/0")}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _source_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
