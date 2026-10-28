// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 !a0; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const opts = { step: 2 };
			let n = 0;
			_html(`<button>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_patch_write($scope1_id, "wd", opts.step, 1);
			_patch_fill($scope1_id, "va1", n, 1);
			_scope($scope1_id, {
				d: opts.step,
				e: n
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
