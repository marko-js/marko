// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: "a4 !a1; b D ;<span></span><button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x + $global$1.n;
			_html(`<span></span>${_el_mark($scope1_id, "a")}<button>${_text_mark($scope1_id, "c", x)}</button>${_el_mark($scope1_id, "b")}`);
			_fill_global_subscribe("a0", $scope1_id, 1);
			_script($scope1_id, "a1");
			_script($scope1_id, "a2");
			_patch_fill($scope1_id, "va3", x, 1);
			_scope($scope1_id, {
				d: x,
				f: y
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
