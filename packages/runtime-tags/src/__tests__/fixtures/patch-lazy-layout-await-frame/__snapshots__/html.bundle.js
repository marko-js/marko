// root.marko
const $template$4 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$1 = "EbD%n";
const $setup$5 = [[], []];
_shells({ d: "d;EbD%;<html><body><header>site</header><main><!></main></body></html>" });
var root_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><header>site</header><main>`);
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</main>"), _trailers("</body></html>");
	_scope($scope0_id, {});
}, 1);

// tags/icon.marko
const $template$3 = "<svg></svg>";
const $setup$4 = [[], []];
_shells({
	f: "f; ;<svg></svg>",
	f1: "f1; ;<path></path>"
});
var icon_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg${_attr("viewBox", input.name, $scope0_id, "aa$viewBox", $scope0_reason, 0)}>`);
	_if(() => {
		if (input.name) {
			const $scope1_id = _scope_id();
			_html(`<path${_attr("d", input.name, $scope1_id, "aa$d", $scope0_reason, 0)}></path>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 0))}`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "f0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 0, ["f1"], $scope0_reason, 0);
	_html(`</svg>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {});
});

// docs.marko
const $template$2 = "<nav><!></nav><article><!></article>";
const $walks = "D%lD%l";
const $setup$3 = [[], []];
_shells({
	a1: "a1;b%b%;<!><!><!><!>",
	a2: "a2;b%b%;<!><!><!><!>",
	a: "a;D%lD%;<nav><!></nav><article><!></article>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$3),
	a0: "a0;D ;<a> </a>"
});
var docs_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "a", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope3_id = _scope_id();
			_html(`<a>${_text_resume($scope3_id, "a", item, 1, $scope0_reason, 0)}</a>`);
			_scope($scope3_id, {});
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 0, "a0", $scope0_reason, 0);
		_if(() => {
			if (list[0]) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				icon_default({ name: list[0] });
				_patch_child_end();
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a4");
				_scope($scope2_id, {
					_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
		_scope($scope1_id, {});
	}, 1, "a1", _unfilled_if($scope0_reason, 0) && 2, 1);
	_html("</nav><article>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("</article>");
	_scope($scope0_id, {});
});

// page-a.marko
const $template$1 = "<h1>A</h1>";
const $setup$2 = [[], []];
_shells({ b: "b,<h1>A</h1>" });
var page_a_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
});

// page-b.marko
const $template = "<h1>B</h1>";
const $setup$1 = [[], []];
_shells({ c: "c,<h1>B</h1>" });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>B</h1>");
});

// template.marko
const $Docs_withLoadAssets = withLoadAssets(() => docs_default, "a", flush, "_a");
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "b", flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "c", flush, "_c");
const $setup = _shell_setup([[], []], ["a>", $setup$5]);
_shells({
	e1: "e1;b%;<!><!><!>",
	e: /*@__PURE__*/ ((_w0) => `e${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$4),
	e2: /*@__PURE__*/ (() => `e2${_shell_marker(_shell_setup([[], []], ["b>", $setup$3]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)(),
	e3: "e3,<p>home</p>",
	e0: /*@__PURE__*/ (() => `e0${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	e4: /*@__PURE__*/ (() => `e4${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 1), $wi__input_page = _write_if($scope0_reason, 1), $cg__input_list = _client_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $wi__input_page__OR__input_list = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	const $input_list__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope4 = _peek_scope_id($scope0_id, "a", 2);
	root_default({ content: _content("e9", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page === 0) {
				const $scope4_id = _scope_id();
				_html("<p>home</p>");
				$wi__input_page && _scope($scope4_id, {});
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope3 = _peek_scope_id($scope2_id, "b", 1);
				$Docs_withLoadAssets({
					list: input.list,
					content: _content("e1", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_if(() => {
							if (input.page === 1) {
								const $scope5_id = _scope_id();
								const $childScope = _peek_scope_id($scope5_id, "b", 0);
								$PageA_withLoadAssets({});
								_patch_child_end();
								_scope($scope5_id, { b: _existing_scope($childScope) });
								return 0;
							} else {
								const $scope6_id = _scope_id();
								const $childScope2 = _peek_scope_id($scope6_id, "b", 0);
								$PageB_withLoadAssets({});
								_patch_child_end();
								_scope($scope6_id, { b: _existing_scope($childScope2) });
								return 1;
							}
						}, $scope3_id, "a", 1, $wg__input_page, 1, 0, 0, ["e0", "e4"], $scope0_reason, 1);
						$cg__input_page && _patch_init($scope3_id, "e5");
						$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope3_id, {
							_: _scope_with_id($scope2_id),
							Cf: 1
						}));
						$wg__input_page || $wi__input_page && _resume_branch($scope3_id);
					}, $scope2_id, 1)
				});
				_patch_child_end();
				$cg__input_list && _patch_init($scope2_id, "e6");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_list__closures, _scope($scope2_id, {
					_: $wi__input_page__OR__input_list && _scope_with_id($scope1_id),
					b: _existing_scope($childScope3)
				}), $cg__input_list && "e7");
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_page, 1, 0, 0, ["e3", "e2"], $scope0_reason, 1);
		$wi__input_page__OR__input_list && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_page && "e8", $wg__input_page);
		$wg__input_page || $wi__input_page__OR__input_list && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.list,
		f: $wi__input_page && _unfilled_if($scope0_reason, 1) && $input_page__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_list__closures,
		a: _existing_scope($childScope4)
	}) || _filled_guard($scope0_reason, 2) && $cg__input_page && _patch_fill($scope0_id, "ve10", input.list, !_server_guard($scope0_reason, 2));
}, 1);
