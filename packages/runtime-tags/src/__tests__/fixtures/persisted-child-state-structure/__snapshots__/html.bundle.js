// tags/toggle-panel/index.marko
const $template = "<div></div>";
_shells({
	b: "b; ;<div></div>",
	b0: "b0,<em>on</em>"
});
var toggle_panel_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)(" b"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(toggle_panel_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "a", $childScope);
		toggle_panel_default({ show: true });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [toggle_panel_default]);
