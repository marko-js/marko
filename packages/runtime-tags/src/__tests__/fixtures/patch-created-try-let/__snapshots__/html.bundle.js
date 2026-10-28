// template.marko
_shells({
	a2: "a2",
	a3: "a3 !a0; D ;<button> </button>",
	a: "a;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_text_resume($scope2_id, "b", "open")}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_fill($scope2_id, "va1", open, 1);
				_scope($scope2_id, { c: open });
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("caught");
			}, 0, "a2", "a3", 0, 0, 1);
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
