// template.marko
_renderer_shells({ a0: ",[0,\"a0\",\"<span>hi <!></span>\",\"Db%\"]" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>hi <!>${_patch_text($scope1_id, "a", input.msg)}${_escape(input.msg)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_show)}<button>c <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {
		g: input.msg,
		h: count
	});
	_resume_branch($scope0_id);
}, 1);
