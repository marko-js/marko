// tags/probe.marko
const $template = "<div> </div>";
const $walks = " D l";
const $setup$1 = [[], []];
_shells({ b: "b; D ;<div> </div>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_promise = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "b", "pending", 1, 0, 0, 1)}</div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_promise, "e");
	_scope($scope0_id, { e: input.promise }) || $fg__input_promise && _patch_write($scope0_id, "xe", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a5"]], ["c>", $setup$1]);
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: `a${_shell_marker($setup)};${((_w0) => ` Db%l/${_w0}&%c`)($walks)};${((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>Count ${_text_mark($scope0_id, "b", count, 2)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	probe_default({ promise: input.promise });
	_patch_child_end();
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", v.name, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a4", 1);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "a1", void 0, "a3", 1, 0, 2);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		h: count,
		c: _existing_scope($childScope),
		i: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	});
}, 1);
