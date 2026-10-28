// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `b/${_w0}& b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Show_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Show = { content: _content("a0", ({ value }) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		_if(() => {}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_subscribe($count__closures, _scope($scope1_id, {
			d: value,
			_: _scope_with_id($scope0_id)
		}), "a2") || _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va1", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Show.content({ value: input.label });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: count,
		g: $count__closures,
		a: _existing_scope($childScope)
	});
}, 1);
