// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0 !a1;D l ;<p> </p><button>c</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_owned_guard($scope0_owned, 2) && _patch_write($scope1_id, "c", label);
			_html(`<p>${_patch_text($scope1_id, "a", label, void 0, $scope0_owned, 2)}</p><button>c</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { e: input.title });
}, 1, 0);
