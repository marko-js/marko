// tags/counter/index.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3 !b0;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			const $countChange = input.onCount || void 0;
			_patch_let_change($scope1_id, "vb2", count, "wd", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.onCount }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.onCount, !_server_guard($scope0_reason, 1));
});

// tags/middle/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var middle_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	counter_default({
		show: input.show,
		onCount: input.onCount
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `E lDb%l/${_w0}&l`)($walks)};${((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	middle_default({
		show: input.show,
		onCount: _resume(function(next) {
			last = next;
		}, "a0", $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { c: _existing_scope($childScope) });
}, 1);
