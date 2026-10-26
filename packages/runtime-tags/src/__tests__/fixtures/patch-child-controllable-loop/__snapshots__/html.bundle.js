// tags/counter/index.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3 !b0;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
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
			$scope0_page && _scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.onCount }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.onCount, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["c>", $setup]))};${/*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<p><!> hit <!></p>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		let hits = 0;
		_html(`<p>${_patch_text($scope1_id, "a", name, void 0, 0, 0)} hit ${_patch_text($scope1_id, "b", hits, 2, 0, 0, 1)}</p>`);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _patch_child($scope1_id, "c");
		counter_default({
			show: input.show,
			onCount: _resume(function(next) {
				hits = next;
			}, "a0", $scope1_id)
		});
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		$scope0_page && _scope($scope1_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			c: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a2", 0, 0);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
}, 1);
