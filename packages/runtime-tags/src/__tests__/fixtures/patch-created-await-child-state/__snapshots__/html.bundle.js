// tags/counter.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!> <!></button>" });
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 0;
	_html(`<button>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)} ${_text_resume($scope0_id, "c", c, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, { g: c });
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				counter_default({ label: v });
				_patch_child_end();
				_scope($scope2_id, { a: _existing_scope($childScope) });
			}, 1, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
