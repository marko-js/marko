// template.marko
const $template = "<main><a> </a><!><button> </button></main>";
const $walks = "D D l%b D m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_input_attrs#7;D D l%b D ;<main><a> </a><!><button> </button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_input_img#10; ;<img>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><a${_patch_attrs({
		href: "/static",
		...input.attrs
	}, "#a/0", $scope0_id, "a", $scope0_owned, 1)}>${_patch_text($scope0_id, "#text/1", input.label, $scope0_owned, 2)}${_el_resume($scope0_id, "#text/1")}</a>${_el_resume($scope0_id, "#a/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<img${_patch_attrs({
				alt: "hero",
				...input.img
			}, "#img/0", $scope1_id, "img", $scope0_owned, 4)}>${_el_resume($scope1_id, "#img/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_img#10");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4", { "EventAttributes:#img/0": ["...input.img", "5:24"] });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, {
		count: "1:6",
		"EventAttributes:#a/0": ["...input.attrs", "3:24"]
	});
	_resume_branch($scope0_id);
}, 1, 0);
