// template.marko
_shells({
	a: "a !a1;D b Db%;<main><div></div><button>c <!></button></main>",
	a0: "a0;Db%;<span>hi <!></span>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>hi ${_patch_text($scope1_id, "a", input.msg, 2, $scope0_owned, 2)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_show)}<button>c ${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		g: input.msg,
		h: count
	});
}, 1, 0);
