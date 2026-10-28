// tags/one.marko
_shells({ b: "b,<i>one</i>" });
var one_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>one</i>");
	return input.a + "!";
});

// template.marko
_shells({ a: "a;b1b b Db%;<!><!><input><label>after <!></label>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $inputshowonenull_scope = _peek_scope_id();
	let x = _dynamic_tag($scope0_id, "a", input.show ? one_default : null, { a: "a" }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, 0, "a0");
	_var($scope0_id, "b", $inputshowonenull_scope, "a0");
	const after = _id("A");
	_html(`<input${_attr("id", after, $scope0_id, "ac$id", 0, 0)}>${_el_resume($scope0_id, "c", 0)}<label${_attr("for", after, $scope0_id, "ad$for", 0, 0)}>after ${_text_resume($scope0_id, "e", x, 2)}</label>${_el_resume($scope0_id, "d", 0)}`);
	_scope($scope0_id, {});
}, 1);
