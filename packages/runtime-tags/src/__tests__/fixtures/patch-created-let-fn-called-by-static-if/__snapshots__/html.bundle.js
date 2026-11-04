// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: "a1 !a2;b%b ;<!><!><button>set</button>",
	a0: "a0 a5;D ;<b> </b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const on = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 1;
			const add = (v) => v + n;
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<b>${_text_mark($scope2_id, "a", add(10))}</b>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, 0, 1, 0, 0, ["a0"], 0, 0);
			_html(`<button>set</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "we", on);
			_patch_fill($scope1_id, "va3", n, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && on });
}, 1);
