// template.marko
_shells({
	"__tests__/template.marko_1*shell": ",`__tests__/template.marko_1*shell,<p>shown</p>`",
	"__tests__/template.marko_2*shell": ",`__tests__/template.marko_2*shell;D ;<li> </li>`"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello <!>${_patch_text($scope0_id, "#text/0", input.name, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_reason && writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", item, $scope0_owned, 2)}${_el_resume($scope2_id, "#text/0")}</li>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#text/2", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_2*shell");
	_html("</div>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
