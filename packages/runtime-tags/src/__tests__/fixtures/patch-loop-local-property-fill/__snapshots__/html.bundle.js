// tags/tagged/index.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var tagged_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button>+</button>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([["a4"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va0", item?.id);
		_set_scope_reason(6);
		const $childScope = _patch_child($scope1_id, "a", 0);
		tagged_default({ label: `${item.id}:${count}` });
		_patch_child_end();
		_scope($scope1_id, {
			f: item?.id,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { f: count });
}, 1);
