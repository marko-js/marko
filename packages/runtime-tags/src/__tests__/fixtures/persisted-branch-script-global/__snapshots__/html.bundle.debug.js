// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_$global_brand#5,<p>promo</p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", $global$1.brand)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_script($scope1_id, "__tests__/template.marko_1_$global_brand#5");
			_patch_effect($scope1_id, "__tests__/template.marko_1_$global_brand#5", "$global_brand 1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, { $global_brand: $global$1?.brand }, "__tests__/template.marko", 0, { $global_brand: ["$global.brand"] }) : _patch_write($scope0_id, "$global_brand", $global$1?.brand);
}, 1, 1);
