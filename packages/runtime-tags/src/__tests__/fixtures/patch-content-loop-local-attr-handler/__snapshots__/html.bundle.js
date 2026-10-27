// tags/menu.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1; D ;<button> </button>"
});
var menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xf", it?.onPick, !_server_guard($scope0_reason, 0));
		_html(`<button${_patch_attr_class($scope1_id, "aa$class", "b" + it.id, $scope0_reason, 0)}>${_patch_text($scope1_id, "b", it.label, void 0, $scope0_reason, 0)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0", 1, _filled_guard($scope0_reason, 0), "f");
		_scope($scope1_id, { f: it?.onPick });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, {
			id: x.id,
			label: x.name,
			onPick: _resume_locals(function() {
				picked = x.name;
			}, "a0", { g: x }, $scope0_id)
		});
	});
	const $childScope = _patch_child($scope0_id, "a", 0);
	menu_default({ item: $item });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", picked)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
