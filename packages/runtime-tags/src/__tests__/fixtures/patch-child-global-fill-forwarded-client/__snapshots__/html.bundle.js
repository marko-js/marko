// tags/child.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.a, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 1));
});

// tags/mid.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason(16 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: $global$1.x,
		show: input.show
	});
	_patch_child_end();
	_fill_global_subscribe("c0", $scope0_id);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button>t</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a", 0);
	mid_default({ show });
	_patch_child_end();
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		c: show,
		a: _existing_scope($childScope)
	});
}, 1);
