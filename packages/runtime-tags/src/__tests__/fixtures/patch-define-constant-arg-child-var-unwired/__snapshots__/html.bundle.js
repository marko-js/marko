// tags/x-child.marko
_shells({ b: "b," });
var x_child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.x + "!";
});

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)("");
_shells({ a: `a;${((_w0) => `/${_w0}&D l`)($D_content__walks)};${((_w0) => `${_w0}<p> </p>`)($D_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("a1", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		let r = x_child_default({ x: on });
		_patch_child_end();
		_html(`<span>${_text_mark($scope1_id, "c", r, 1, $scope1_reason, 0)}</span>`);
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	D.content({ on: "a" });
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
