// tags/child.marko
let n = 0;
function random() {
	return ++n / 10;
}
_shells({ b: "b;D ;<a href=\"/\"> </a>" });
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_text_resume($scope0_id, "a", random(), void 0, 0, 0)}</a>`);
	_scope($scope0_id, {});
});

// tags/wrapper.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	wrapper_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		child_default({});
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
