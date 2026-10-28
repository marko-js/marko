// tags/counter.marko
const $template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks = "E%c%l l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>" });
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 1)}: ${_text_resume($scope0_id, "b", n, 2)}</span><button class=inc>+</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { h: n });
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a !a4;D%b D ;<main><!><button id=c> </button></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				counter_default({
					label: v,
					start: 1
				});
				_patch_child_end();
				_scope($scope2_id, { a: _existing_scope($childScope) });
			}, 1, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`<button id=c>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		h: count
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
