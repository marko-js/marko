// root.marko
const $template$4 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$1 = "EbD%n";
_shells({ d: "d;EbD%;<html><body><header>site</header><main><!></main></body></html>" });
var root_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><header>site</header><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</main>"), _trailers("</body></html>");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);

// tags/icon.marko
const $template$3 = "<svg></svg>";
_shells({
	f: "f; ;<svg></svg>",
	f0: "f0; ;<path></path>"
});
var icon_default = _template_persisted("f", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<svg${_patch_attr($scope0_id, "a", "viewBox", input.name, $scope0_owned, 0)}>`);
	_if(() => {
		if (input.name) {
			const $scope1_id = _scope_id();
			_html(`<path${_patch_attr($scope1_id, "a", "d", input.name, $scope0_owned, 0)}></path>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, ["f0"], $scope0_owned, 0);
	_html(`</svg>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && _scope($scope0_id, { d: _source_if($scope0_reason, 0) && input.name });
}, 0, 0);

// docs.marko
const $template$2 = "<nav><!></nav><article><!></article>";
const $walks = "D%lD%l";
_shells({
	a0: "a0;b%b%;<!><!><!><!>",
	a1: "a1;b%b%;<!><!><!><!>",
	a: "a;D%lD%;<nav><!></nav><article><!></article>",
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $template$3),
	a3: "a3;D ;<a> </a>"
});
var docs_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_list = _source_guard($scope0_reason, 0), $sg__input_content = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope3_id = _scope_id();
			_html(`<a>${_patch_text($scope3_id, "a", item, void 0, $scope0_owned, 0)}</a>`);
			_scope($scope3_id, {});
		}, 0, $scope1_id, "a", 1, $sg__input_list, $sg__input_list, void 0, void 0, "a3", $scope0_owned, 0);
		_if(() => {
			if (list[0]) {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope);
				icon_default({ name: list[0] });
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", 1, $sg__input_list, $sg__input_list, void 0, void 0, ["a2"], $scope0_owned, 0);
		$scope0_reason && _scope($scope1_id, { e: _source_if($scope0_reason, 0) && list?.[0] });
	}, 1, "a1", 1);
	_html("</nav><article>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</article>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, () => [icon_default]);

// page-a.marko
const $template$1 = "<h1>A</h1>";
_shells({ b: "b,<h1>A</h1>" });
var page_a_default = _template_persisted("b", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<h1>A</h1>");
}, 0, 0);

// page-b.marko
const $template = "<h1>B</h1>";
_shells({ c: "c,<h1>B</h1>" });
var page_b_default = _template_persisted("c", (input) => {
	_persisted_reason();
	_scope_id();
	_html("<h1>B</h1>");
}, 0, 0);

// template.marko
const $Docs_withLoadAssets = withLoadAssets(docs_default, "_a", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "_b", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "_c", void 0, 1);
_shells({
	e0: "e0;b%;<!><!><!>",
	e1: "e1;b%;<!><!><!>",
	e: /*@__PURE__*/ ((_w0, _w1) => `e;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$1), ((_w0) => `<!>${_w0}<!>`)($template$4)),
	e2: /*@__PURE__*/ ((_w0, _w1) => `e2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2)),
	e3: "e3,<p>home</p>",
	e4: /*@__PURE__*/ ((_w0, _w1) => `e4;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	e5: /*@__PURE__*/ ((_w0, _w1) => `e5;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("e", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 1), $si__input_page = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	const $input_list__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope4 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope4);
	root_default({ content: _content_elide("e1", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page === 0) {
				const $scope4_id = _scope_id();
				_html("<p>home</p>");
				$scope0_reason && _scope($scope4_id, {});
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope3 = _peek_scope_id();
				_patch_child($scope2_id, "a", $childScope3);
				$Docs_withLoadAssets({
					list: input.list,
					content: _content_elide("e0", () => {
						_persisted_reason();
						const $scope3_id = _scope_id();
						_if(() => {
							if (input.page === 1) {
								const $scope5_id = _scope_id();
								const $childScope = _peek_scope_id();
								_patch_child($scope5_id, "b", $childScope);
								$PageA_withLoadAssets({});
								_scope($scope5_id, { b: _existing_scope($childScope) });
								return 0;
							} else {
								const $scope6_id = _scope_id();
								const $childScope2 = _peek_scope_id();
								_patch_child($scope6_id, "b", $childScope2);
								$PageB_withLoadAssets({});
								_scope($scope6_id, { b: _existing_scope($childScope2) });
								return 1;
							}
						}, $scope3_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["e4", "e5"], $scope0_owned, 1);
						$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 1) && $input_page__closures, _scope($scope3_id, {
							_: _scope_with_id($scope2_id),
							Cf: 1
						}));
						$sg__input_page || $scope0_reason && _resume_branch($scope3_id);
					}, $scope2_id)
				});
				_subscribe(_unfilled_if($scope0_owned, 2) && $input_list__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope3)
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["e3", "e2"], $scope0_owned, 1);
		$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 1) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_page || $scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_reason && _scope($scope0_id, {
		d: $si__input_page && input.page,
		e: $si__input_page && input.list,
		f: $input_page__closures,
		g: $input_list__closures,
		a: _existing_scope($childScope4)
	});
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Docs_withLoadAssets,
	root_default
]);
