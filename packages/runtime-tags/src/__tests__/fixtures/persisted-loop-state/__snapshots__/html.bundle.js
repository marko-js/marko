// template.marko
_shells({
	a: "a !a1;D b Db%;<main><ul></ul><button>Count <!></button></main>",
	a0: "a0 a3;D%c%;<li><!> (<!>)</li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.label, void 0, $scope0_owned, 0)} (${_text_resume($scope1_id, "b", count, 2)})</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "a0", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}<button>Count ${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { g: count });
}, 1, 0);
