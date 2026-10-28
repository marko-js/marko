// tags/plain.marko
_shells({ c: "c;D ;<i> </i>" });
var plain_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "a", input.n, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup$1 = [[], []];
_shells({ b: "b;D l%;<p> </p><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.n, 1, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "b", input.tag, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		tag: plain_default,
		n: input.n
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
