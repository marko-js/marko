// template.marko
_shells({ a: "a !a0;E lD l ;<div><h1> </h1><h2> </h2><button>+</button></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 10;
	_html(`<div><h1>${_text_resume($scope0_id, "a", input.title + " #0")}</h1><h2>${_text_resume($scope0_id, "b", input.title + " / 10")}</h2><button>+</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: input.title,
		g: count,
		i: other
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
