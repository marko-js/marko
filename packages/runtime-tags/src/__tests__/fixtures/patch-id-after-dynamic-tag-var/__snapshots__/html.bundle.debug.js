// tags/one.marko
const $template$1 = "<i>one</i>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/one.marko": "^__tests__/tags/one.marko,<i>one</i>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>one</i>");
	const $return = input.a + "!";
	return $return;
});

// template.marko
const $template = "<!><!><input><label>after <!></label>";
const $walks = "b1b b Db%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;b1b b Db%;<!><!><input><label>after <!></label>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $inputshowonenull_scope = _peek_scope_id();
	let x = _dynamic_tag($scope0_id, "#text/0", input.show ? one_default : null, { a: "a" }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, void 0, "__tests__/template.marko_0_x#8/var");
	_var($scope0_id, "#scopeOffset/1", $inputshowonenull_scope, "__tests__/template.marko_0_x#8/var");
	const after = _id("after");
	_html(`<input${_attr("id", after, $scope0_id, "PatchAttr:#input/2 id", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}<label${_attr("for", after, $scope0_id, "PatchAttr:#label/3 for", 0, 0)}>after ${_text_resume($scope0_id, "#text/4", x, 2)}</label>${_el_resume($scope0_id, "#label/3", 0)}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
