// template.marko
const shout = (s) => s.toUpperCase() + "!";
const stamp = "srv";
_shells({ a0: ",`a0 a3 a4;D ;<span> </span>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><p>${_patch_text($scope0_id, "a", shout(input.title), $scope0_owned, 0)}${_el_resume($scope0_id, "a")} <!>${_patch_text($scope0_id, "b", stamp)}${_el_resume($scope0_id, "b")}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(shout(input.title) + " #0")}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.title,
		i: count
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
