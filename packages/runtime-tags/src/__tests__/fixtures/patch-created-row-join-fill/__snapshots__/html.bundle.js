// tags/plain-let.marko
const $setup$2 = [[], []];
_shells({ b: "b !," });
_stateful_return("b");
var plain_let_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	const $valueChange2 = _patch_bind($scope0_id, "wU", _resume(function(next) {
		value = next;
	}, "b0", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", value, 1);
	_scope($scope0_id, { U: $valueChange2 });
	_resume_branch($scope0_id);
	return $return;
});

// tags/row-list.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $setup$1 = _shell_setup([[], ["c8"]], ["a>", $setup$2]);
_shells({
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `0${_w0}&b%b b`)("")};${((_w0) => `<!>${_w0}<!><button>+</button>`)("")}`)(),
	c5: "c5 !;b%;<!><!><!>",
	c4: "c4 c2 c12;D ;<span> </span>"
});
var row_list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type = _write_guard($scope0_reason, 1), $wi__input_settled = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_settled__closures = /* @__PURE__ */ new Set();
	const $bounty__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let bounty = plain_let_default({ value: 1 });
	_var($scope0_id, "b", $childScope, "c0");
	_patch_child_end();
	_for_of(input.tally, (t) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "vc6", t);
		_if(() => {
			if (input.type) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", t + bounty + input.settled)}</span>`);
				_patch_init_entry($scope2_id, "c1", _filled_guard($scope0_reason, 2) && ">>i", _filled_guard($scope0_reason, 0) && ">c");
				_subscribe($bounty__closures, _subscribe($wi__input_settled && $input_settled__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "c2"), "c3");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_type, void 0, void 0, void 0, ["c4"], $scope0_reason, 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "c7");
		_scope($scope1_id, {
			c: t,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "c5", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "c8");
	_scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.type,
		i: input.settled,
		j: bounty,
		a: _existing_scope($childScope),
		l: $wi__input_settled && $input_settled__closures,
		m: $bounty__closures
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc9", input.type, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vc10", input.settled, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	row_list_default({
		tally: input.tally,
		type: input.type,
		settled: input.settled
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
