// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "a", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", value, 1, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, 1, "a0", _unfilled_if($scope0_reason, 0) && 2, 1);
	_html("</main>");
}, 1);
