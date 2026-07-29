// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_mode = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.mode === "a" ? 0 : 1, $scope0_id, "#text/2", $sg__input_mode, $sg__input_mode, $sg__input_mode, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=note>alpha panel</p>");
		$sg__input_mode && writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=note>beta panel</p>");
		$sg__input_mode && writeScope($scope2_id, {}, "__tests__/template.marko", "6:2");
	}], [0, 0], "__tests__/template.marko_r0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=bump> </button><!><!>", " D l%c"],
	"__tests__/template.marko": ["<button class=bump> </button><!><!>", " D l%c"]
});
