// tags/label.marko
const $template = "<span> </span>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l b`)("D l")};${((_w0) => `${_w0}<p> </p><button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ onHide: function() {
		x = "z";
	} });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", x + input.w)}</p><button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.w,
		h: x,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 1));
}, 1);
