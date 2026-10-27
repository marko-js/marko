// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content("a0", ({ label }) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		const $scope1_page = _page_render();
		if ($scope0_page) _if(() => {}, $scope1_id, "a", 1, 1, 0, 0, 1);
		$scope1_page ? _subscribe($open__closures, _scope($scope1_id, {
			d: label,
			_: _scope_with_id($scope0_id)
		}), "a2") : _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va1", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content({ label: input.label });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, {
		f: open,
		g: $open__closures,
		a: _existing_scope($childScope)
	});
}, 1);
