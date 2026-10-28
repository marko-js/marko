// tags/echo.marko
const $template$1 = "<em> </em>";
const $setup$2 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var echo_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.text, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button class=inc> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `D l/${_w0}&/${_w1}&`)("D l", $walks)};${((_w0, _w1) => `<span> </span>${_w0}${_w1}`)($template$1, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { label: input.label };
	_html(`<span>${_text_resume($scope0_id, "a", Foo.label, 1, $scope0_reason, 0)}</span>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	echo_default({ text: Foo.label });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
