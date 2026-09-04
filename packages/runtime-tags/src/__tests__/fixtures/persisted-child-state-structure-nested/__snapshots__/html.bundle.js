// tags/panel/index.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0; ;<section></section>",
	b1: "b1;D ;<em> </em>"
});
var panel_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<em>${_patch_text($scope2_id, "a", input.title, void 0, $scope0_owned, 4)}</em>`);
					_subscribe(_source_if($scope0_reason, 4) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["b1"], $scope0_owned, 3);
			_html(`</section>${_el_resume($scope1_id, "a", $sg__input_inner)}`);
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 2);
	$scope0_reason ? _scope($scope0_id, {
		e: input.inner,
		f: input.title,
		h: $input_title__closures
	}) : (_owned_guard($scope0_owned, 3) && _client_guard($scope0_owned, 2) && _patch_value($scope0_id, "b0", input.inner), _owned_guard($scope0_owned, 4) && (_client_guard($scope0_owned, 3) || _client_guard($scope0_owned, 2)) && _patch_value($scope0_id, "b1", input.title));
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: 3,
		1: 3,
		2: 1,
		3: _mask_group($scope0_owned, 0),
		4: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	panel_default({
		show: true,
		inner: input.inner,
		title: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.inner), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.title));
}, 1, () => [panel_default]);
