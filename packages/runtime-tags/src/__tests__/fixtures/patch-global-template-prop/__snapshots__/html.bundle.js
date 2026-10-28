// tags/other.marko
_shells({ c: "c;Db%;<i>user=<!></i>" });
var other_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<i>user=${_text_resume($scope0_id, "a", $global$1.user, 2, 4, 0)}</i>`);
	_fill_global_subscribe("c0", $scope0_id);
	_scope($scope0_id, {});
});

// tags/child.marko
const $template = "<div><!><b> </b></div>";
const $walks = "D%bD m";
const $setup$1 = [[], []];
_shells({ b: "b;D%bD ;<div><!><b> </b></div>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<b>${_text_resume($scope0_id, "b", input.n, void 0, $scope0_reason, 1)}</b></div>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		content: other_default,
		n: count
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
