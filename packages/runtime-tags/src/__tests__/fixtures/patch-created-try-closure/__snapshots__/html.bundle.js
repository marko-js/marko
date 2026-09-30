// template.marko
_shells({
	a0: "a0 a8;D%c%;<p><!> <!></p>",
	a: "a !a6; b%;<button>+</button><!><!>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", count)} ${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</p>`);
				_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a2");
				_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "a3"), "a4");
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("caught");
			}, void 0, "a5", "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a6");
	$scope0_page && _scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.label,
		g: count,
		h: _unfilled_if($scope0_reason, 1) && $input_label__closures,
		i: $count__closures
	});
}, 1, 0);
