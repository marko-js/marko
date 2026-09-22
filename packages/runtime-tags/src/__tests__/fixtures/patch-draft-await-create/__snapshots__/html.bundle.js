// page.marko
const $template = "<!><!><!>";
_shells({
	a1: "a1,Loading",
	a2: "a2 a18;Db%c%l%;<p class=summary>Page <!> of <!></p><!><!>",
	a3: "a3 a18;Db%c%l%;<p class=summary>Page <!> of <!></p><!><!>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5 a19;Db%l%;<span>Page <!></span><!><!>",
	a: "a !;b%;<!><!><!>"
});
var page_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $page__closures = /* @__PURE__ */ new Set();
	const $global_total__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const _pageSource = $global$1.page;
	let page = _pageSource;
	const go = _act(_resume((next) => {
		page = next;
	}, "a0", $scope0_id));
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>Page ${_text_resume($scope1_id, "a", page, 2)}</span>`);
		_try($scope1_id, "b", _content_resume("a4", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_await($scope2_id, "a", $global$1.total, (total) => {
				const $scope3_id = _scope_id();
				_script($scope3_id, "a10");
				_patch_value($scope3_id, "a3", total);
				_html(`<p class=summary>Page ${_text_resume($scope3_id, "a", page, 2)} of ${_patch_text($scope3_id, "b", total, 2)}</p>`);
				if ($scope0_page) _if(() => {
					if (page < total) {
						const $scope4_id = _scope_id();
						_script($scope4_id, "a8");
						_html(`<a${_attr("href", `?page=${page + 1}`)}>Next</a>${_el_resume($scope4_id, "a")}`);
						_script($scope4_id, "a9");
						_scope($scope4_id, { Ch: 2 });
						return 0;
					} else {
						const $scope6_id = _scope_id();
						_html("<span>Last page</span>");
						_scope($scope6_id, {});
						return 1;
					}
				}, $scope3_id, "c", 1, 1, 1, 0, 1);
				_scope($scope3_id, {
					e: total,
					_: _scope_with_id($scope2_id),
					Ch: 1
				});
			}, 1, "a3", 1);
			_global_subscribe("a7", $scope2_id);
			_subscribe(_unfilled_if() && $global_total__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_shell("a1", $scope1_id) }) }, 1);
		_subscribe($page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), {}, 1);
	_global_subscribe("a6", $scope0_id);
	_patch_value($scope0_id, "a1", page, 1);
	_patch_value($scope0_id, "a2", go, 1);
	$scope0_page ? _scope($scope0_id, {
		b: _pageSource,
		d: page,
		f: go,
		h: $page__closures
	}) : _patch_value($scope0_id, "a0", _pageSource);
	$scope0_page && _resume_branch($scope0_id);
}, 0, 1);

// template.marko
const $Page_withLoadAssets = withLoadAssets(page_default, "_a", void 0, 1);
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0,<p>Book details</p>",
	b1: /*@__PURE__*/ ((_w0, _w1) => `b1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_details = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.details) {
			const $scope1_id = _scope_id();
			_html("<p>Book details</p>");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "b", $childScope);
			$Page_withLoadAssets({});
			_scope($scope2_id, { b: _existing_scope($childScope) });
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_details, $sg__input_details, void 0, void 0, ["b0", "b1"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [$Page_withLoadAssets]);
