// template.marko
_shells({ a: "a !a0;E l bD ;<main><h1> </h1><button>read</button><p> </p></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global$1.brand)}${_el_resume($scope0_id, "a")}</h1><button>read</button>${_el_resume($scope0_id, "b")}<p>${_escape("")}${_el_resume($scope0_id, "c")}</p></main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "e");
	$scope0_reason ? writeScope($scope0_id, { e: $global$1?.brand }) : _patch_write($scope0_id, "e", $global$1?.brand);
	_resume_branch($scope0_id);
}, 1, 1);
