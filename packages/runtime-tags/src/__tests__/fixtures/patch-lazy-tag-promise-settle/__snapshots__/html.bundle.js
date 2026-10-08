// probe.marko
const $template = "<div> </div>";
_shells({ a: "a !a0;D ;<div> </div>" });
var probe_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let settled = false;
	_html(`<div>${_text_resume($scope0_id, "a", "pending")}</div>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "d");
	_patch_value($scope0_id, "a1", settled, 1);
	$scope0_page ? _scope($scope0_id, { d: input.promise }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "d", input.promise);
});

// template.marko
const $Probe_withLoadAssets = withLoadAssets(probe_default, flush, "_a");
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<em> </em>",
	b2: "b2;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`)()
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Probe_withLoadAssets({ promise: input.promise });
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", v.name, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "b0", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b3");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b4", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "b5", void 0, "b2", 1);
	$scope0_page && _scope($scope0_id, {
		b: _existing_scope($childScope),
		g: $input_promise__closures
	});
}, 1);
