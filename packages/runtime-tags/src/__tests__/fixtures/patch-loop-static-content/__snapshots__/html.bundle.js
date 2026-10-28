// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a0: "a0;Db%;<p>item <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>item ${_text_resume($scope1_id, "a", name, 2, 0, 0)}</p>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a0", 0, 0);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
