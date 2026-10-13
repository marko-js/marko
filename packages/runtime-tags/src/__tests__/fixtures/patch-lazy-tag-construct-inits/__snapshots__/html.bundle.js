// child.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
_shells({
	a: "a !a2; b%;<button>+</button><!><!>",
	a0: "a0 a5;D%c%;<span><!>:<!></span>"
});
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>+</button>${_el_resume($scope0_id, "a")}`);
	_for_of([1, 2], (i) => {
		const $scope1_id = _scope_id();
		_patch_value($scope1_id, "va1", i);
		_html(`<span>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope1_id, "b", count + i, 2)}</span>`);
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a0", 0, 0);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va3", count, 1);
	$scope0_page && _scope($scope0_id, { f: count });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({
	b: "b !b1; D l bD ;<button class=n> </button><main></main><p> </p>",
	b0: /*@__PURE__*/ (() => `b0;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "b");
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $wg__input_show)}<p>${_patch_text($scope0_id, "d", input.label, void 0, $scope0_reason, 1)}</p>`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "vb3", n, 1);
	$scope0_page ? _scope($scope0_id, {
		h: _write_if($scope0_reason, 0) && input.label,
		i: n
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb2", input.label);
}, 1);
