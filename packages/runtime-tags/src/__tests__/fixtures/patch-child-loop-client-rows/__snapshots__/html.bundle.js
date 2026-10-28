// tags/rows.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b !;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "a", item.id, 1, $scope0_reason, 1)}:${_text_resume($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {});
		}, 1, "b0");
		_html("</div>");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b3");
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "b2", $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb4", input.promise, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>drop</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	rows_default({
		items,
		promise: input.promise
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: items,
		b: _existing_scope($childScope)
	});
}, 1);
