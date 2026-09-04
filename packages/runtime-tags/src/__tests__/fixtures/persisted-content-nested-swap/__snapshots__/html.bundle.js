// template.marko
_shells({
	a: "a !a1;D%b D ;<main><!><button> </button></main>",
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $tag = input.content;
			_patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 2);
			_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		g: input.content,
		h: count
	});
}, 1, 0);
