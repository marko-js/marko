// tags/tagged/index.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var tagged_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_attr("id", input.id, $scope0_id, "a", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.tag.name, void 0, $scope0_reason, 2)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, {
		g: input.tag,
		i: count
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", input.tag, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.first, (a) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		tagged_default({
			id: "a",
			tag: a.tag
		});
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 1, "a1", 1);
	_await($scope0_id, "b", input.second, (b) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		tagged_default({
			id: "b",
			tag: b.tag
		});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope2) });
	}, 1, "a0", 1);
}, 1);
