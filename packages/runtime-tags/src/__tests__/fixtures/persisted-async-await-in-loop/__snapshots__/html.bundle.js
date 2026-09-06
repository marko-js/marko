// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a3;D%b ;<main><!><button>interactive</button></main>",
	a2: "a2;D ;<em> </em>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", item.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", value, void 0, $scope0_owned, 0)}</em>`);
			_scope($scope2_id, {});
		}, 1, "a2");
		$scope0_reason && _scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_owned, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
