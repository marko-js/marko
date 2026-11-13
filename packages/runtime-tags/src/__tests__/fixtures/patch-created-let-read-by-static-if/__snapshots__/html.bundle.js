// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 !a2; b%;<button>set</button><!><!>",
	a0: "a0 a5;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const items = [1, 2];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 1;
			_html(`<button>set</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				if (items.length) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "a", count)}</span>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, 0, 1, 0, 0, ["a0"], 0, 0);
			_script($scope1_id, "a2");
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "wf", items.length);
			_patch_fill($scope1_id, "va3", count, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && items.length });
}, 1);
