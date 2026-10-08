// child.marko
const $template$2 = "<span class=child>child <!></span>";
const $walks$2 = "Db%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko;Db%;<span class=child>child <!></span>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_patch_text($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/child.marko", 0);
});

// other.marko
const $template$1 = "<span class=other>other <!></span>";
const $walks$1 = "Db%l";
_shells({ "__tests__/other.marko": "__tests__/other.marko;Db%;<span class=other>other <!></span>" });
var other_default = _template_patch("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=other>other ${_patch_text($scope0_id, "#text/0", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/other.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_label#0:4/init!__tests__/template.marko_1; b%;<button>toggle</button><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let alt = false;
			_html(`<button>toggle</button>${_el_resume($scope1_id, "#button/0")}`);
			_dynamic_tag($scope1_id, "#text/1", alt ? $Child_withLoadAssets : other_default, { label: input.label });
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko_fill1", alt, 1);
			_scope($scope1_id, {
				alt,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "5:4", { alt: "6:10" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.label);
}, 1);
