// template.marko
_shells({
	a: "a !a1;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a3;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const base = 20;
			_patch_value($scope1_id, "a0", base);
			_html(`<p>${_text_resume($scope1_id, "a", 20)}</p>`);
			_scope($scope1_id, {
				b: base,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { f: count });
	_resume_branch($scope0_id);
}, 1, 0);
