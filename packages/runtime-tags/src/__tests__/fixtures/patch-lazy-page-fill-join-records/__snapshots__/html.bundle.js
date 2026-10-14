// layout.marko
const $template$3 = "<nav><!></nav><main><!></main>";
const $walks$3 = "D%lD%l";
_shells({
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a: "a;D%lD%;<nav><!></nav><main><!></main>",
	a2: "a2;D ;<a> </a>"
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_patch_text($scope2_id, "a", item, void 0, $scope0_reason, 0)}</a>`);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
		_scope($scope1_id, {});
	}, 1, "a0", 1);
	_html("</nav><main>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
});

// page-a.marko
const $template$2 = "<h1>A</h1><p> </p><!><button> </button>";
const $walks$2 = "bD l%b D l";
_shells({
	b: "b !b1;bD l%b D ;<h1>A</h1><p> </p><!><button> </button>",
	b0: "b0,<p>wide</p>"
});
var page_a_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>A</h1><p>${_patch_text($scope0_id, "a", input.note, void 0, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			_write_if($scope0_reason, 1) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "d", n)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "vb2", n, 1);
	$scope0_page && _scope($scope0_id, { i: n });
});

// tags/card.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ e: "e;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// page-b.marko
const $template = "<h1>B</h1><!><button> </button>";
const $walks = "b%b D l";
_shells({
	c0: "c0 c6;D%c%c%;<span><!>/<!>/<!></span>",
	c: "c !c3;b%b D ;<h1>B</h1><!><button> </button>",
	c1: /*@__PURE__*/ ((_w0) => `c1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var page_b_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $p__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const p = input.note;
	_html("<h1>B</h1>");
	_for_of([1, 2], (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a");
		card_default({
			title: item,
			content: _content_elide("c0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_patch_text($scope2_id, "a", p, void 0, $scope0_reason, 0)}/${_text_resume($scope2_id, "b", count, 2)}/${_patch_text($scope2_id, "c", item, 2, 0, 0)}</span>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "c2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $p__closures, _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c1", 0, 0);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c3");
	_patch_value($scope0_id, "vc4", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		i: $count__closures,
		j: _write_if($scope0_reason, 0) && $p__closures
	});
});

// template.marko
const $Layout_withLoadAssets = withLoadAssets(layout_default, flush, "_a");
const $PageA_withLoadAssets = withLoadAssets(page_a_default, flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(page_b_default, flush, "_c");
_shells({
	d0: "d0;b%;<!><!><!>",
	d: "d !;E%;<html><body><!></body></html>",
	d1: /*@__PURE__*/ (() => `d1;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$3)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$3)}`)(),
	d2: /*@__PURE__*/ (() => `d2;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	d3: /*@__PURE__*/ (() => `d3;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)(),
	d4: "d4,<p>home</p>"
});
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 3), $wi__input_page__OR__input_wide__OR__input_note = _write_if($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 6), $wi__input_page = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_wide__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope5_id = _scope_id();
			_html("<p>home</p>");
			$wi__input_page && _scope($scope5_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope3 = _patch_child($scope1_id, "b");
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("d0", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope3_id = _scope_id();
							_set_scope_reason(_mask_group($scope0_reason, 6) << 1 | _mask_group($scope0_reason, 5) << 3);
							const $childScope = _patch_child($scope3_id, "b");
							$PageA_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_client_guard($scope0_reason, 5) && _patch_init($scope3_id, "d5");
							_client_guard($scope0_reason, 6) && _patch_init($scope3_id, "d6");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_wide__closures, _scope($scope3_id, {
								_: $wi__input_page__OR__input_wide__OR__input_note && _scope_with_id($scope2_id),
								b: _existing_scope($childScope)
							})));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_set_scope_reason(_mask_group($scope0_reason, 6) << 1);
							const $childScope2 = _patch_child($scope4_id, "b");
							$PageB_withLoadAssets({ note: input.note });
							_client_guard($scope0_reason, 6) && _patch_init($scope4_id, "d7");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope4_id, {
								_: _write_if($scope0_reason, 0) && _scope_with_id($scope2_id),
								b: _existing_scope($childScope2),
								Ck: $wi__input_note && 1
							}));
							return 1;
						}
					}, $scope2_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d2", "d3"], $scope0_reason, 3);
					_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "d8");
					$wi__input_page__OR__input_wide__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$wg__input_page || $wi__input_page__OR__input_wide__OR__input_note && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope3)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d4", "d1"], $scope0_reason, 3);
	_trailers("</body></html>");
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 3) && input.list,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.wide,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.note,
		j: _write_if($scope0_reason, 5) && $input_wide__closures,
		k: $wi__input_note && $input_note__closures,
		h: $wi__input_page && $input_page__closures
	}) : (_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "vd9", input.list), _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "vd10", input.wide), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "vd11", input.note));
}, 1);
