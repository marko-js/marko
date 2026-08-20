// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>t</button></main>",
	a0: "a0 a4 a5; ;<a>go</a>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				class: "off"
			}, "a", $scope1_id, "a")}>go</a>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? writeScope($scope0_id, {
		f: input.attrs,
		g: on
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.attrs);
	_resume_branch($scope0_id);
}, 1, 0);
