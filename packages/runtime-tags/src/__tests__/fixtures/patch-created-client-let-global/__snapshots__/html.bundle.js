// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3 !a1;D l ;<span> </span><button class=b>b</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_html(`<span>${_text_resume($scope1_id, "a", $global$1.g + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_fill_global_subscribe("a0", $scope1_id, 1);
			_script($scope1_id, "a1");
			_patch_fill($scope1_id, "va2", b, 1);
			_scope($scope1_id, { c: b });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
