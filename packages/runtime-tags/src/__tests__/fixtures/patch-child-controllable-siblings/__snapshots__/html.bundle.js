// tags/counter/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
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

// template.marko
const $setup = _shell_setup([[], []], ["d>", $setup$1], ["e>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `E lDb%c%l/${_w0}&/${_w1}&l`)("b%c", "b%c")};${((_w0, _w1) => `<main><h1> </h1><p>First <!> Second <!></p>${_w0}${_w1}</main>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let first = 0;
	let second = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><p>First ${_text_resume($scope0_id, "b", first, 2)} Second ${_text_resume($scope0_id, "c", second, 2)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "d", 0);
	counter_default({
		show: input.show,
		onCount: _resume(function(next) {
			first = next;
		}, "a0", $scope0_id)
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope2 = _patch_child($scope0_id, "e", 1);
	counter_default({
		show: input.show,
		onCount: _resume(function(next) {
			second = next * 2;
		}, "a1", $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
}, 1);
