// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a3: "a3 !a0; D l ;<span> </span><button>go</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			_html(`<span>${_text_mark($scope1_id, "b", x, 1, 0, 0, 1)}</span>${_el_mark($scope1_id, "a")}<button>go</button>${_el_mark($scope1_id, "c")}`);
			_script($scope1_id, "a0");
			_script($scope1_id, "a1");
			_patch_fill($scope1_id, "va2", y, 1);
			_scope($scope1_id, { e: y });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
