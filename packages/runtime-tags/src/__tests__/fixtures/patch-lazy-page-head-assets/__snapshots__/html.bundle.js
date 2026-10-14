// layout.marko
const $template$2 = "<!><html><head><title>app</title></head><body><main><!></main></body></html>";
const $walks$2 = "bDbE%n";
_shells({ a: "a;bDbE%;<!><html><head><title>app</title></head><body><main><!></main></body></html>" });
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<!doctype html><html><head><title>app</title>${_flush_head()}</head><body><main>`);
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</main>"), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {});
}, 1);

// page-a.marko
const $template$1 = "<button class=a>a:<!></button>";
const $walks$1 = " Db%l";
_shells({ b: "b !b0; Db%;<button class=a>a:<!></button>" });
var page_a_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb1", count, 1);
	$scope0_page && _scope($scope0_id, { c: count });
});

// page-b.marko
const $template = "<button class=b>b:<!></button>";
const $walks = " Db%l";
_shells({ c: "c !c0; Db%;<button class=b>b:<!></button>" });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "vc1", count, 1);
	$scope0_page && _scope($scope0_id, { c: count });
});

// template.marko
const $PageA_withLoadAssets = withLoadAssets(page_a_default, flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(page_b_default, flush, "_c");
_shells({
	d0: "d0;b%;<!><!><!>",
	d: /*@__PURE__*/ (() => `d;${((_w0) => `b/${_w0}&`)($walks$2)};${((_w0) => `<!>${_w0}`)($template$2)}`)(),
	d1: /*@__PURE__*/ (() => `d1;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	d2: /*@__PURE__*/ (() => `d2;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0), $wi__input_page = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope3 = _patch_child($scope0_id, "a");
	layout_default({ content: _content_elide("d0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _patch_child($scope2_id, "b");
				$PageA_withLoadAssets({});
				_scope($scope2_id, { b: _existing_scope($childScope) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _patch_child($scope3_id, "b");
				$PageB_withLoadAssets({});
				_scope($scope3_id, { b: _existing_scope($childScope2) });
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d1", "d2"], $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "d3");
		$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_page || $wi__input_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_page && $input_page__closures,
		a: _existing_scope($childScope3)
	});
}, 1);
