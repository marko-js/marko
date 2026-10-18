// tags/counter/index.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0 !b1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b2");
			const $countChange = input.onCount || void 0;
			_patch_let_change($scope1_id, "vb3", count, "dd", $countChange, $scope0_reason, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _write_if($scope0_reason, 0) && input.onCount }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb4", input.onCount, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `E lDb%l/${_w0}&l`)("b%c")};${((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	const plain = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	const tenfold = _resume((next) => {
		last = next * 10;
	}, "a1", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _patch_child($scope0_id, "c");
	counter_default({
		show: input.show,
		onCount: input.big ? tenfold : plain
	});
	_html("</main>");
	_patch_write($scope0_id, "wj", plain, 1);
	_patch_write($scope0_id, "wk", tenfold, 1);
	_patch_value($scope0_id, "va2", last, 1);
	$scope0_page && _scope($scope0_id, {
		j: _unfilled_if($scope0_reason, 2) && plain,
		k: _unfilled_if($scope0_reason, 2) && tenfold,
		c: _existing_scope($childScope)
	});
}, 1);
