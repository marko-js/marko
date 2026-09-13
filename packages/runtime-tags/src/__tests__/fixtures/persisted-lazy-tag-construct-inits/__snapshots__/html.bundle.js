// child.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
_shells({
	a: "a !a1; b%;<button>+</button><!><!>",
	a0: "a0 a3;D%c%;<span><!>:<!></span>"
});
var child_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_patch_value($scope1_id, "a1", i);
		_html(`<span>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", count + i, 2)}</span>`);
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 0, void 0, void 0, "a0", 0, 0);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_page && _scope($scope0_id, { f: count });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	b: "b !b1; D l bD ;<button class=n> </button><main></main><p> </p>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "c", $sg__input_show)}<p>${_patch_text($scope0_id, "d", input.label, void 0, $scope0_reason, 2)}</p>`);
	_script($scope0_id, "b1");
	$scope0_page && _scope($scope0_id, {
		h: _source_if($scope0_reason, 1) && input.label,
		i: n
	});
}, 1, () => [$Child_withLoadAssets]);
