// tags/child.marko
const $template = "<em> </em><button>set</button>";
const $walks = "D l b";
_shells({ b: "b !;D l ;<em> </em><button>set</button>" });
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = input.foo;
	let count = 0;
	_html(`<em>${_text_resume($scope0_id, "a", count)}</em><button>set</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb1", x, 1);
	_patch_value($scope0_id, "vb2", count, 1);
	$scope0_page && _scope($scope0_id, { g: x?.length });
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a");
			child_default({ foo: input.foo });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.foo }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.foo);
}, 1);
