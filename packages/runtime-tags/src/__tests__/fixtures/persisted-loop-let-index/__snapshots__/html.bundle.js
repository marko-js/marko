// template.marko
_shells({
	a: "a; ;<ul></ul>",
	a0: "a0 !a1;D bD l ;<li> <span> </span><button>+</button></li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_labels = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		let picks = 0;
		_html(`<li>${_patch_text($scope1_id, "a", label, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}<span>${_escape(picks)}${_el_resume($scope1_id, "b")}</span><button>+</button>${_el_resume($scope1_id, "c")}</li>`);
		_script($scope1_id, "a1");
		_patch_value($scope1_id, "a0", picks, 1);
		writeScope($scope1_id, { f: picks });
	}, 0, $scope0_id, "a", 1, $sg__input_labels, $sg__input_labels, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_labels)}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
