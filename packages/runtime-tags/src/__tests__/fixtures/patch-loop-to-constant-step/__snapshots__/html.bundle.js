// template.marko
_shells({
	a: "a;Db%l b ;<p>picked <!></p><div class=from></div><div class=step></div>",
	a1: "a1 !a0; D ;<button> </button>",
	a2: "a2 !a3; D ;<button> </button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>picked ${_text_mark($scope0_id, "a", -1, 2)}</p><div class=from>`);
	_for_to(input.n, 1, 2, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "b", i, 1, $scope0_reason, 0)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "b")}<div class=step>`);
	_for_until(input.n, 0, 3, (i) => {
		const $scope2_id = _scope_id();
		_html(`<button>${_text_mark($scope2_id, "b", i, 1, $scope0_reason, 0)}</button>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a3");
		_scope($scope2_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "c")}`);
	_scope($scope0_id, {});
}, 1);
