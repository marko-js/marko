// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_banner = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button class=bump>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.banner ? 0 : void 0, $scope0_id, "c", $sg__input_banner, $sg__input_banner, $sg__input_banner, 0, 1, "a0", [() => {
		const $scope1_id = _scope_id();
		_html("<aside class=banner>system maintenance at midnight</aside>");
		$sg__input_banner && writeScope($scope1_id, {});
	}], [0], "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["<button class=bump> </button><!><!>", " D l%c"],
	"a": ["<button class=bump> </button><!><!>", " D l%c"]
});
