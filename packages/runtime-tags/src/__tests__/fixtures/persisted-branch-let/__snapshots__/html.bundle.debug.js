// template.marko
_renderer_shells({ "__tests__/template.marko_1_shell": ",`__tests__/template.marko_1_shell __tests__/template.marko_1;Db%l ;<p>Seen <!></p><button>+</button>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title)}${_escape(input.title)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<p>Seen <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</p><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			writeScope($scope1_id, { count }, "__tests__/template.marko", "3:4", { count: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1_shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
