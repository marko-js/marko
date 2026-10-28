// template.marko
_shells({ a: "a;D lD ;<p> </p><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_resume($scope0_id, "a", x)}</p><p>${_text_resume($scope0_id, "b", input.w, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {});
}, 1);
