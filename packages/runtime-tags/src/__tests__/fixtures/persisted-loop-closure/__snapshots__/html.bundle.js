// template.marko
_shells({ a0: ",`a0 a3;D bD ;<li> <span> </span></li>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let boost = 0;
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", label, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}<span>${_escape(boost)}${_el_resume($scope1_id, "b")}</span></li>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a")}<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, { f: boost });
	_resume_branch($scope0_id);
}, 1, 0);
