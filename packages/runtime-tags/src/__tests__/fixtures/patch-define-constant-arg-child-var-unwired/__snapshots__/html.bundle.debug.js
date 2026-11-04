// tags/x-child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/x-child.marko": "^__tests__/tags/x-child.marko," });
var x_child_default = _template("__tests__/tags/x-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x + "!";
	return $return;
});

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)("");
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($D_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": `__tests__/template.marko;${((_w0) => `/${_w0}&D l`)($D_content__walks)};${((_w0) => `${_w0}<p> </p>`)($D_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		let r = x_child_default({ x: on });
		_patch_child_end();
		_html(`<span>${_text_mark($scope1_id, "#text/2", r, 1, $scope1_reason, 0)}</span>`);
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	D.content({ on: "a" });
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
