// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
_shells({ a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `b/${_w0}& D l`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button> </button>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $uid__closures = /* @__PURE__ */ new Set();
	let uid = input.id;
	const Row = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + n)}</p>`);
		_subscribe($uid__closures, _scope($scope1_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		})) || _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va1", n, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ n: input.name });
	_patch_child_end();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", uid, 1);
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && uid,
		i: n,
		j: $uid__closures,
		a: _existing_scope($childScope)
	});
}, 1);
