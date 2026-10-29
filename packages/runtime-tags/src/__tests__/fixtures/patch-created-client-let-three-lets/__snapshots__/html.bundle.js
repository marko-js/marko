// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 a4!a0;D l ;<span> </span><button class=b>b</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 2;
			const d = 4;
			_html(`<span>${_text_resume($scope1_id, "a", 6)}</span><button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_patch_write($scope1_id, "wg", d, 1);
			_patch_fill($scope1_id, "va1", b, 1);
			_scope($scope1_id, {
				d: b,
				g: d
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
