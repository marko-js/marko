// probe.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ a: "a;D ;<div> </div>" });
var probe_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_promise = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", "pending", 1, 0, 0, 1)}</div>`);
	_script($scope0_id, "a0", 1, $fg__input_promise);
	_scope($scope0_id, { d: input.promise }) || $fg__input_promise && _patch_write($scope0_id, "xd", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Probe_withLoadAssets = withLoadAssets(() => probe_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1",
	b2: "b2;D ;<em> </em>",
	b3: "b3;b%;<!><!><!>",
	b: `b${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Probe_withLoadAssets({ promise: input.promise });
	_patch_child_end();
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 0);
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", v.name, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "b0", $ui__input_promise && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b4", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b4", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "b1", void 0, "b3", 1, 0, 2);
	_scope($scope0_id, {
		b: _existing_scope($childScope),
		g: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	});
}, 1);
