// tags/probe.marko
const $template = "<div> </div>";
const $walks = " D l";
const $setup$1 = [[], []];
_shells({ b: "b; D ;<div> </div>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "b", "pending", void 0, 0, 0, 1)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, _filled_guard($scope0_reason, 0), "e");
	_scope($scope0_id, { e: input.promise }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a6"]], ["c>", $setup$1]);
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` Db%l/${_w0}&%c`)($walks)};${((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>Count ${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	probe_default({ promise: input.promise });
	_patch_child_end();
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", v.name, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a4" : "a5");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a5", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "a1", void 0, "a3", 1, void 0, 2);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		h: count,
		c: _existing_scope($childScope),
		i: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	});
}, 1);
