// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_if(() => input.show ? 0 : void 0, $scope0_id, "a", 1 | _persisted_reason(), $sg__input_show, $sg__input_show, 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<button class=child>${_escape(count)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}], ["a3"], "a4");
	writeScope($scope0_id, { e: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<button class=child> </button>", " D l"],
	"a5": ["<button class=child> </button>", " D l"],
	"a1": ["<!><!><!>", "b%c"],
	"a": ["<!><!><!>", "b%c"]
});
