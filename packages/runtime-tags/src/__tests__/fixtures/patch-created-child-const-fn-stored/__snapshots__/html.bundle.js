// tags/card.marko
const $template = "<output></output><button>toggle</button>";
const $walks = " b b";
const $setup = [[], ["b1"]];
_shells({ b: "b !b1; b ;<output></output><button>toggle</button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<output></output>${_el_resume($scope0_id, "a")}<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.fn,
		f: open,
		h: g
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb3", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va3", input.label, !$sg__input_label) : _patch_write($scope0_id, "xe", input.label, !$sg__input_label));
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ fn: _bind_resume(function() {
				return "f:" + input.label;
			}, "a0", $scope1_id) });
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, { e: input.label });
}, 1);
