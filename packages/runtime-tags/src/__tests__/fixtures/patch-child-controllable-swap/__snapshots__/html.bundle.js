// tags/counter/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b3: "b3 !b0;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_onCount = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_mark($scope1_id, "a", count, 2)}</span><button>+</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b1");
			const $countChange = input.onCount || void 0;
			_patch_let_change($scope1_id, "vb2", count, "wd", $countChange, $scope0_reason, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b3"], $scope0_reason, 0);
	$fg__input_onCount && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b1", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.onCount }) || $fg__input_onCount && $ui__input_show && _patch_write($scope0_id, "xe", input.onCount, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `E lDb%l/${_w0}&l`)("b%c")};${((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_big = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let last = 0;
	const plain = _resume((next) => {
		last = next;
	}, "a0", $scope0_id, 1);
	const tenfold = _resume((next) => {
		last = next * 10;
	}, "a1", $scope0_id, 1);
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p>Last ${_text_mark($scope0_id, "b", last, 2)}</p>`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	counter_default({
		show: input.show,
		onCount: input.big ? tenfold : plain
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		j: $ui__input_big && plain,
		k: $ui__input_big && tenfold,
		c: _existing_scope($childScope)
	});
}, 1);
