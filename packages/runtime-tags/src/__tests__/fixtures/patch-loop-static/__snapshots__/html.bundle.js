// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a1: "a1;D%c%;<p><!> <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", name, 1, 0, 0)} ${_text_resume($scope1_id, "b", input.note, 2, $scope0_reason, 1)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a1", 0, 0);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
