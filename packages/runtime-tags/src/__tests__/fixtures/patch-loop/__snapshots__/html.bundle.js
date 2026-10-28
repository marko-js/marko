// template.marko
_shells({
	a: "a !a1;E l b Db%;<main><h1> </h1><ul></ul><button>Count <!></button></main>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "a", item.label, 1, $scope0_reason, 1)}</li>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 0, "a0", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "b")}<button>Count ${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { i: count });
}, 1);
