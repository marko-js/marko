// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: "a2 !;D l%b%;<p> </p><!><!><!>",
	a1: "a1 a6!a0; D%b%;<button><!><!></button>",
	a3: "a3 a7;D%b%;<span><!><!></span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let sel = 1;
			_html(`<p>${_text_mark($scope1_id, "a", sel)}</p>`);
			_for_to(2, 1, 1, (n) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "b", n === sel ? "*" : "")}${_text_mark($scope2_id, "c", n, 2, 0, 0)}</button>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {
					M: n,
					_: _scope_with_id($scope1_id)
				});
			}, 0, $scope1_id, "b", 1, 1, 1, 0, 0, "a1", 0, 0);
			_for_of([{ id: 1 }, { id: 2 }], (item) => {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_mark($scope3_id, "a", item.id === sel ? "*" : "")}${_text_mark($scope3_id, "b", item.id, 2, 0, 0)}</span>`);
				_scope($scope3_id, {
					M: item?.id,
					_: _scope_with_id($scope1_id)
				});
			}, "id", $scope1_id, "c", 1, 1, 1, 0, 0, "a3", 0, 0);
			_patch_fill($scope1_id, "va4", sel, 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
