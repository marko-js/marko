// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D ;<button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $b_getter = _hoist($scope0_id, "__tests__/template.marko_0_b#3/hoist");
	let a = _resume(() => $b_getter, "__tests__/template.marko_0/a");
	let b = _resume(() => a, "__tests__/template.marko_0/b", $scope0_id);
	_html(`<button>${_text_resume($scope0_id, "#text/1", typeof a)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		b
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
	_assert_hoist(b);
}, 1);
