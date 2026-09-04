// template.marko
_shells({ a: "a !a0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item.id)}`);
		if ($scope0_reason) _if(() => {
			if (input.selected === item.id) {
				const $scope2_id = _scope_id();
				_html("<span>*</span>");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b", 1, 1, 1, 0, 1);
		_html("</li>");
		_scope($scope1_id, { e: item?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.selected,
		f: items
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.selected);
}, 1, 0);
