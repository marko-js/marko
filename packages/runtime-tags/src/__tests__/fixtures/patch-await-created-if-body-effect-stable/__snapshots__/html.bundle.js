// template.marko
_shells({
	a1: "a1 !a0; ;<div></div>",
	a: "a;b%;<!><!><!>",
	a2: "a2 !a0; ;<div></div>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(1), (v) => {
				const $scope2_id = _scope_id();
				_html(`<div></div>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_write($scope2_id, "wc", v, 1);
				_scope($scope2_id, { c: v });
			}, 1, "a1");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
