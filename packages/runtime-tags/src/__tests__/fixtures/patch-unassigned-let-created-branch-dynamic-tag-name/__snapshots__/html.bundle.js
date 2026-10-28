// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", x === "a" ? "b" : "i", {}, 0, _content("a0", () => {
				_scope_id();
				_scope_reason();
				_html("t");
			}, $scope1_id));
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 1);
	_scope($scope0_id, { f: $wi__input_show && x }) || _content_withhold(input.v);
	$wg__input_show || $wi__input_show && _resume_branch($scope0_id);
}, 1);
