// tags/labeler.marko
const $template$1 = "<span> </span>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	_scope($scope0_id, {});
	return $return;
});

// tags/list.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c2: /*@__PURE__*/ (() => `c2${_shell_marker(_shell_setup([[], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1)}`)()
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items__OR__input_suffix = _client_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xe", item, !_server_guard($scope0_reason, 1));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0, $cg__input_items__OR__input_suffix && 1);
		let label = labeler_default({ title: item + input.suffix });
		$cg__input_items__OR__input_suffix && _var($scope1_id, "b", $childScope, "c0");
		_patch_child_end();
		_html(`<p>${_text_resume($scope1_id, "c", label, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "c1", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "e");
		_scope($scope1_id, {
			e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c2", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "vc3", input.suffix) : $cg__input_items && _patch_write($scope0_id, "xe", input.suffix, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.suffix });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = ["x"];
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({
		items,
		suffix: input.suffix
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
