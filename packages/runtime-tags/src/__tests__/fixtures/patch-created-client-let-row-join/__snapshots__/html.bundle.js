// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 !a2;b%b ;<!><!><button class=b>b</button>",
	a0: "a0 a5;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_for_of([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", b + i)}</span>`);
				_patch_write($scope2_id, "wc", i, 1);
				_scope($scope2_id, {
					c: i,
					_: _scope_with_id($scope1_id)
				});
			}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a0", 0, 0);
			_html(`<button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_fill($scope1_id, "va3", b, 1);
			_scope($scope1_id, { c: b });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
