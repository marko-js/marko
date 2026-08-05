// template.marko
_renderer_shells({ a0: ",`a0 a3;D%c%;<li><!> (<!>)</li>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item.label)}${_escape(item.label)}${_el_resume($scope1_id, "a")} (<!>${_escape(count)}${_el_resume($scope1_id, "b")})</li>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, 1, _serialize_guard($scope0_reason, 0), void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a")}<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, { g: count });
	_resume_branch($scope0_id);
}, 1);
