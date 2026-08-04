// template.marko
_renderer_shells({
	"__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1;Db%l ;<p class=pa>A <!></p><button class=ba>+</button>`",
	"__tests__/template.marko_2_shell": ",`__tests__/template.marko_2_shell __tests__/template.marko_2;Db%l ;<p class=pb>B <!></p><button class=bb>+</button>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $sg__input_a__OR__input_b = _serialize_guard($scope0_reason, 0), $sg__input_b = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			let x = 0;
			_html(`<p class=pa>A <!>${_escape(x)}${_el_resume($scope1_id, "#text/0")}</p><button class=ba>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", x, 1);
			writeScope($scope1_id, { x }, "__tests__/template.marko", "3:4", { x: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_a, $sg__input_a, $sg__input_a__OR__input_b, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			let y = 10;
			_html(`<p class=pb>B <!>${_escape(y)}${_el_resume($scope2_id, "#text/0")}</p><button class=bb>+</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_patch_value($scope2_id, "__tests__/template.marko1", y, 1);
			writeScope($scope2_id, { y }, "__tests__/template.marko", "8:4", { y: "9:10" });
			return 0;
		}
	}, $scope0_id, "#text/2", $sg__input_b, $sg__input_b, $sg__input_a__OR__input_b, void 0, void 0, ["__tests__/template.marko_2_shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
