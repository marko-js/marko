// layout.marko
const $template$2 = "<nav><!></nav><main><!></main>";
const $walks = "D%lD%l";
const $setup$2 = [[], []];
_shells({
	a1: "a1;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>",
	a: "a;D%lD%;<nav><!></nav><main><!></main>",
	a0: "a0;D ;<a> </a>"
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_patch_text($scope2_id, "a", item, void 0, $scope0_reason, 0)}</a>`);
			_scope($scope2_id, {});
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
		_scope($scope1_id, {});
	}, 1, "a1", 1);
	_html("</nav><main>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {});
});

// page-a.marko
const $template$1 = "<h1>A</h1>";
const $setup$1 = [[], []];
_shells({ b: "b,<h1>A</h1>" });
var page_a_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
});

// page-b.marko
const $template = "<h1>B</h1>";
const $setup = [[], []];
_shells({ c: "c,<h1>B</h1>" });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>B</h1>");
});

// template.marko
const $Layout_withLoadAssets = withLoadAssets(() => layout_default, "a", flush, "_a");
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "b", flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "c", flush, "_c");
_shells({
	d1: "d1;b%;<!><!><!>",
	d: "d !;E%;<html><body><!></body></html>",
	d2: /*@__PURE__*/ (() => `d2${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	d3: "d3,<p>home</p>",
	d0: /*@__PURE__*/ (() => `d0${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	d4: /*@__PURE__*/ (() => `d4${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 1), $wi__input_page = _write_if($scope0_reason, 1), $cg__input_page = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope3_id = _scope_id();
			_html("<p>home</p>");
			$wi__input_page && _scope($scope3_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope3 = _patch_child($scope1_id, "b", 1);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("d1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope4_id = _scope_id();
							const $childScope = _patch_child($scope4_id, "b", 0);
							$PageA_withLoadAssets({});
							_patch_child_end();
							_scope($scope4_id, { b: _existing_scope($childScope) });
							return 0;
						} else {
							const $scope5_id = _scope_id();
							const $childScope2 = _patch_child($scope5_id, "b", 0);
							$PageB_withLoadAssets({});
							_patch_child_end();
							_scope($scope5_id, { b: _existing_scope($childScope2) });
							return 1;
						}
					}, $scope2_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d0", "d4"], $scope0_reason, 1);
					$cg__input_page && _patch_init($scope2_id, "d5");
					$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					$wg__input_page || $wi__input_page && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "d6");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope3)
			});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d3", "d2"], $scope0_reason, 1);
	_trailers("</body></html>");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.list,
		f: $wi__input_page && _unfilled_if($scope0_reason, 1) && $input_page__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_page && _patch_fill($scope0_id, "vd7", input.list, !_server_guard($scope0_reason, 2));
}, 1);
