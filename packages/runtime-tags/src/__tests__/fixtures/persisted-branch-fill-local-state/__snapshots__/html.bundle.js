// template.marko
_shells({
	a: "a !a2;D%bD l ;<main><!><em> </em><button id=c>+</button></main>",
	a0: "a0 a4!a1;D l ;<p> </p><button id=n>n</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_resume($scope1_id, "a", input.title + "@0")}</p><button id=n>n</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_patch_value($scope1_id, "a1", n, 1);
			_scope($scope1_id, {
				c: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<em>${_text_resume($scope0_id, "b", count)}</em><button id=c>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? _scope($scope0_id, {
		g: input.title,
		h: count
	}) : _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
