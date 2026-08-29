// template.marko
_shells({
	a: "a !a1;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a0: "a0 a3;Db%;<p>Seen <!></p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>Seen ${_text_resume($scope1_id, "a", count, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { h: count });
	_resume_branch($scope0_id);
}, 1, 0);
