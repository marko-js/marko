// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
_shells({ "__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<aside class=\"promo banner\"> </aside>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_promo = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside class="promo banner">${_patch_text($scope1_id, "#text/0", input.promo, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/0")}</aside>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_promo, $sg__input_promo, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_promo: input.promo,
		count
	}, "__tests__/template.marko", 0, {
		input_promo: ["input.promo"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
