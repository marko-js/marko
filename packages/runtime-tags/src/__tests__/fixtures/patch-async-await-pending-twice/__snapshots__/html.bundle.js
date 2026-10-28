// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: "a;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_await($scope0_id, "b", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", value, void 0, $scope0_reason, 1)}</em>`);
		_scope($scope1_id, {});
	}, 1, "a0", 1);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
