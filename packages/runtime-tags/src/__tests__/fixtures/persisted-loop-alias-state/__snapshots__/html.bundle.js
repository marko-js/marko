// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a4;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a1", item?.id) : _patch_init($scope1_id, "a1");
		const { name } = item;
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a0", name) : _patch_init($scope1_id, "a1");
		const same = item;
		_html(`<p>${_text_resume($scope1_id, "a", name + "/" + same.id + "#0")}</p>`);
		_scope($scope1_id, {
			d: name,
			e: item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "a0", $scope0_owned, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, { f: count });
}, 1, 0);
