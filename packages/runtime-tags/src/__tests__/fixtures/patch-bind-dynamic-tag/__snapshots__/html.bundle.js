// tags/child.marko
const $template = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3 !b0;Db%l ;<span>Seen <!></span><button>+</button>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			const $countChange = input.on || void 0;
			_patch_let_change($scope1_id, "vb2", count, "wd", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.on, !_server_guard($scope0_reason, 1));
});

// tags/store.marko
const $setup$1 = [[], []];
_shells({ c: "c !," });
_stateful_return("c");
var store_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "c0", $scope0_id)
	};
	_patch_fill($scope0_id, "vc1", last, 1);
	return $return;
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1], ["d>", $setup$2]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c")};${((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let store = store_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "c", store.last)}</p>`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "d", 1);
	child_default({
		show: input.show,
		on: store.set
	});
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
