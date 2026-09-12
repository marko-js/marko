// layout.marko
const $template$2 = "<nav><!></nav><main><!></main>";
const $walks = "D%lD%l";
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
const $Layout_withLoadAssets = withLoadAssets(layout_default, "_a", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "_b", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "_c", void 0, 1);
_shells({
	d0: "d0;b%;<!><!><!>",
	d: "d;D ;<html><body></body></html>",
	d1: /*@__PURE__*/ ((_w0, _w1) => `d1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2)),
	d2: "d2,<p>home</p>",
	d3: /*@__PURE__*/ ((_w0, _w1) => `d3;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	d4: /*@__PURE__*/ ((_w0, _w1) => `d4;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope3_id = _scope_id();
			_html("<p>home</p>");
			$scope0_reason && _scope($scope3_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope3 = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope3);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("d0", () => {
					_persisted_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope4_id = _scope_id();
							const $childScope = _peek_scope_id();
							_patch_child($scope4_id, "b", $childScope);
							$PageA_withLoadAssets({});
							_scope($scope4_id, { b: _existing_scope($childScope) });
							return 0;
						} else {
							const $scope5_id = _scope_id();
							const $childScope2 = _peek_scope_id();
							_patch_child($scope5_id, "b", $childScope2);
							$PageB_withLoadAssets({});
							_scope($scope5_id, { b: _existing_scope($childScope2) });
							return 1;
						}
					}, $scope2_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d3", "d4"], $scope0_owned, 1);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 1) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$sg__input_page || $scope0_reason && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d2", "d1"], $scope0_owned, 1);
	_html(`</body>${_el_resume($scope0_id, "a", $sg__input_page)}`), _trailers("</html>");
	$scope0_reason && _scope($scope0_id, {
		d: input.page,
		e: input.list,
		f: $input_page__closures
	});
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Layout_withLoadAssets
]);
