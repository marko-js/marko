// helper.ts
function coin() {
	return 1;
}

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > input.min && coin() > .5) {
			const $scope1_id = _scope_id();
			_html("<p>win</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.min,
		f: count
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.min);
}, 1, 0);
