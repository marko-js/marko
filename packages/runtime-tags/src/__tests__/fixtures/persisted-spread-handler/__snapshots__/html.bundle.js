// template.marko
_shells({
	a: "a;D%bD ;<main><!><em> </em></main>",
	a1: "a1 !a2; ;<a>go</a>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_patch_attrs({
				...input.attrs,
				onClick: _resume(function() {
					count++;
				}, "a0", $scope1_id)
			}, "a", $scope1_id, "a", $scope0_owned, 2)}>go</a>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a2");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"]);
	_html(`<em>${_escape(count)}${_el_resume($scope0_id, "b")}</em></main>`);
	$scope0_reason && writeScope($scope0_id, {
		f: input.attrs,
		g: count
	});
	_resume_branch($scope0_id);
}, 1, 0);
