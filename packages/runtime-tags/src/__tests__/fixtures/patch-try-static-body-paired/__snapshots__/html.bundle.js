// template.marko
_shells({
	a2: "a2;D ;<s> </s>",
	a3: "a3,<b>static</b>",
	a0: "a0,<i>loading</i>",
	a1: "a1,<em>static</em>",
	a: "a;E l%b%;<main><p> </p><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_text_resume($scope0_id, "a", input.x, 1, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		_scope_id();
		_html("<em>static</em>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a0", void 0, "a1", 0, 0, 2);
	_try($scope0_id, "c", () => {
		_scope_reason();
		_scope_id();
		_html("<b>static</b>");
	}, void 0, (e) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<s>${_text_resume($scope4_id, "a", e.message, 1, 4, 0)}</s>`);
		_scope($scope4_id, {});
	}, 0, "a2", "a3", 0, 1, 1);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
