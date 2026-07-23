// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let nav = 0;
	_html(`<button class=nav>nav <!>${_escape(nav)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.show ? 0 : void 0, $scope0_id, "c", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html("<div class=arrived> arrived</div>");
		_script($scope1_id, "a2");
		$sg__input_show && writeScope($scope1_id, {});
	}], ["a3"]);
	_script($scope0_id, "a4");
	writeScope($scope0_id, { g: _state_reason() && nav });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<div class=arrived> arrived</div>", "b"],
	"a5": ["<div class=arrived> arrived</div>", "b"],
	"a1": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=nav>nav <!></button><!><!>", " Db%l%c"]
});
