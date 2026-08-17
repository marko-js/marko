// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({ "__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D ;<a> </a>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 2)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attr($scope1_id, "#a/0", "href", input.href, $scope0_owned, 4)}${_patch_attr($scope1_id, "#a/0", "hidden", input.hidden, $scope0_owned, 5)}>${_patch_text($scope1_id, "#text/1", input.label, $scope0_owned, 6)}${_el_resume($scope1_id, "#text/1")}</a>${_el_resume($scope1_id, "#a/0")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_href: input.href,
		input_hidden: input.hidden,
		input_label: input.label
	}, "__tests__/template.marko", 0, {
		input_href: ["input.href"],
		input_hidden: ["input.hidden"],
		input_label: ["input.label"]
	});
}, 1, 0);
