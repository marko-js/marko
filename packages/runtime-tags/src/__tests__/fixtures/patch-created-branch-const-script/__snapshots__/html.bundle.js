// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 !a0,<p>probe</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const bag = { items: [] };
			_html("<p>probe</p>");
			_script($scope1_id, "a0", 0);
			_patch_write($scope1_id, "wb", bag.items, 1);
			_scope($scope1_id, { b: bag.items });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
