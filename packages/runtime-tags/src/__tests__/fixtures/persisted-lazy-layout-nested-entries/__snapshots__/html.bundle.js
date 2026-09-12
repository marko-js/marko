// layout.marko
const $template$2 = "<nav><!></nav><main><!></main>";
const $walks$2 = "D%lD%l";
_shells({
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a: "a;D%lD%;<nav><!></nav><main><!></main>",
	a2: "a2;D ;<a> </a>"
});
var layout_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_list = _source_guard($scope0_reason, 0), $sg__input_content = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_patch_text($scope2_id, "a", item, void 0, $scope0_owned, 0)}</a>`);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, $sg__input_list, $sg__input_list, void 0, void 0, "a2", $scope0_owned, 0);
		$scope0_reason && _scope($scope1_id, {});
	}, 1, "a1", 1);
	_html("</nav><main>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// page-a.marko
const $template$1 = "<h1>A</h1><p> </p><!><button> </button>";
const $walks$1 = "bD l%b D l";
_shells({
	b: "b !b1;bD l%b D ;<h1>A</h1><p> </p><!><button> </button>",
	b0: "b0,<p>wide</p>"
});
var page_a_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_wide = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>A</h1><p>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_owned, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_wide, $sg__input_wide, void 0, void 0, ["b0"], $scope0_owned, 1);
	_html(`<button>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b0", n, 1);
	$scope0_reason && _scope($scope0_id, { i: n });
}, 0, 0);

// page-b.marko
const $template = "<h1>B</h1><p> </p><!><!>";
const $walks = "bD l%c";
_shells({
	c: "c;bD l%;<h1>B</h1><p> </p><!><!>",
	c0: "c0,<p>wide</p>"
});
var page_b_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_wide = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<h1>B</h1><p>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_owned, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_wide, $sg__input_wide, void 0, void 0, ["c0"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
const $Layout_withLoadAssets = withLoadAssets(layout_default, "_a", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "_b", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "_c", void 0, 1);
_shells({
	d0: "d0;b%;<!><!><!>",
	d: "d;D ;<html><body></body></html>",
	d1: /*@__PURE__*/ ((_w0, _w1) => `d1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$2), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2)),
	d2: /*@__PURE__*/ ((_w0, _w1) => `d2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	d3: /*@__PURE__*/ ((_w0, _w1) => `d3;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)),
	d4: "d4,<p>home</p>"
});
var template_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 3), $si__input_page = _source_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_wide__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope5_id = _scope_id();
			_html("<p>home</p>");
			$scope0_reason && _scope($scope5_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 4) });
			const $childScope3 = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope3);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("d0", () => {
					_persisted_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope3_id = _scope_id();
							_set_serialize_reason({
								0: _mask_group($scope0_owned, 6),
								1: _mask_group($scope0_owned, 5)
							});
							const $childScope = _peek_scope_id();
							_patch_child($scope3_id, "b", $childScope);
							$PageA_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_subscribe(_unfilled_if($scope0_owned, 6) && $input_note__closures, _subscribe(_unfilled_if($scope0_owned, 5) && $input_wide__closures, _scope($scope3_id, {
								_: _scope_with_id($scope2_id),
								b: _existing_scope($childScope)
							})));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_set_serialize_reason({
								0: _mask_group($scope0_owned, 6),
								1: _mask_group($scope0_owned, 5)
							});
							const $childScope2 = _peek_scope_id();
							_patch_child($scope4_id, "b", $childScope2);
							$PageB_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_subscribe(_unfilled_if($scope0_owned, 6) && $input_note__closures, _subscribe(_unfilled_if($scope0_owned, 5) && $input_wide__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								b: _existing_scope($childScope2),
								Cj: 1,
								Ck: 1
							})));
							return 1;
						}
					}, $scope2_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d2", "d3"], $scope0_owned, 3);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 3) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$sg__input_page || $scope0_reason && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d4", "d1"], $scope0_owned, 3);
	_html(`</body>${_el_resume($scope0_id, "a", $sg__input_page)}`), _trailers("</html>");
	$scope0_reason && _scope($scope0_id, {
		d: $si__input_page && input.page,
		e: $si__input_page && input.list,
		f: $si__input_page && input.wide,
		g: $si__input_page && input.note,
		j: $input_wide__closures,
		k: $input_note__closures,
		h: $input_page__closures
	});
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Layout_withLoadAssets
]);
