// template.marko
_shells({ a: "a !a0;E l Db%;<div><h1> </h1><button>Count <!></button></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><button>Count ${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { g: count });
}, 1, 0);
