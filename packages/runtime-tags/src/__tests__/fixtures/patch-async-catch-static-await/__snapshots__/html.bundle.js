// template.marko
function fail() {
	return Promise.reject(/* @__PURE__ */ new Error("down"));
}
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<p>oops</p>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a;E l%;<main><p> </p><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_text_resume($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", fail(), (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", v, void 0, 0, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 1);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<p>oops</p>");
	}, void 0, "a1", "a3", void 0, void 0, 1);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
