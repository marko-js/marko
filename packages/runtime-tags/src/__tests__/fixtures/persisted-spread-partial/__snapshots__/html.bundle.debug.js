// template.marko
const $template = "<main><button> </button><div class=fixed> </div></main>";
const $walks = "D D l D m";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_patch_attrs_partial(input.attrs, { "on-click": 1 }, "#button/0", $scope0_id, "button", $scope0_owned, 0)}>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<div class=fixed${_patch_attrs_partial(input.box, { class: 1 }, "#div/2", $scope0_id, "div", $scope0_owned, 1)}>${_patch_text($scope0_id, "#text/3", input.label, $scope0_owned, 2)}${_el_resume($scope0_id, "#text/3")}</div>${_el_resume($scope0_id, "#div/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0_input_box#7");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#6");
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, {
		count: "1:6",
		"EventAttributes:#button/0": ["...input.attrs", "3:14"],
		"EventAttributes:#div/2": ["...input.box", "4:11"]
	});
	_resume_branch($scope0_id);
}, 1, 0);
