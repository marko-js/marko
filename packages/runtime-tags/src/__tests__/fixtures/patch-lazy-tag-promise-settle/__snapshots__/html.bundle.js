// probe.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ a: "a;D ;<div> </div>" });
var probe_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", "pending", void 0, 0, 0, 1)}</div>`);
	_script($scope0_id, "a0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha0" : "ea0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.promise }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Probe_withLoadAssets = withLoadAssets(() => probe_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1",
	b2: "b2;D ;<em> </em>",
	b3: "b3;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	$Probe_withLoadAssets({ promise: input.promise });
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", v.name, void 0, $scope0_reason, 0)}</em>`);
			$scope0_page && _scope($scope3_id, {});
		}, 1, "b0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "b4" : "b5");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "b5", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "b1", void 0, "b3", 1, void 0, 2);
	$scope0_page && _scope($scope0_id, {
		b: _existing_scope($childScope),
		g: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	});
}, 1);
