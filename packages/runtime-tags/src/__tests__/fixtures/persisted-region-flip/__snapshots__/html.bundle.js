// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_mode = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.mode === "a" ? 0 : 1, $scope0_id, "c", $sg__input_mode, $sg__input_mode, $sg__input_mode, 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=note>alpha panel</p>");
		$sg__input_mode && writeScope($scope1_id, {});
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p class=note>beta panel</p>");
		$sg__input_mode && writeScope($scope2_id, {});
	}], [0, 0], "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=bump> </button><!><!>", " D l%c"],
	"a": ["<button class=bump> </button><!><!>", " D l%c"]
});
