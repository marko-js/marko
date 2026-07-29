// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let nav = 0;
	_html(`<button class=nav>nav <!>${_escape(nav)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/2", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<div class=arrived> arrived</div>");
		_script($scope1_id, "__tests__/template.marko_1");
		$sg__input_show && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { nav: _seed_fill(_state_reason() && nav) }, "__tests__/template.marko", 0, { nav: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<div class=arrived> arrived</div>", "b"],
	"__tests__/template.marko_1_content": ["<div class=arrived> arrived</div>", "b"],
	"__tests__/template.marko_0_update": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"]
});
