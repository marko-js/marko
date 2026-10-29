// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b3"]];
_shells({ b: "b !b3; b%;<button>x</button><!><!>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				_scope_id();
				_html("done");
			}, 0, 0);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, 0, "b1", "b2");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b3");
	_patch_fill($scope0_id, "vb5", rows, 1);
	_scope($scope0_id, {
		e: input.promise,
		g: $wi__input_promise && $input_promise__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<h1>Rows whose await rejects</h1><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ promise: input.promise });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
