// layout.marko
const $template$3 = "<nav><!></nav><main><!></main>";
const $walks$3 = "D%lD%l";
_shells({
	"__tests__/layout.marko_1*content": "__tests__/layout.marko_1*content;b%;<!><!><!>",
	"__tests__/layout.marko_0_#text#0/await": "__tests__/layout.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/layout.marko": "__tests__/layout.marko;D%lD%;<nav><!></nav><main><!></main>",
	"__tests__/layout.marko_2*shell": "__tests__/layout.marko_2*shell;D ;<a> </a>"
});
var layout_default = _template_persisted("__tests__/layout.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_list = _source_guard($scope0_reason, 0), $sg__input_content = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "#text/0", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope2_id = _scope_id();
			_html(`<a>${_patch_text($scope2_id, "#text/0", item, void 0, $scope0_owned, 0)}</a>`);
			_scope($scope2_id, {}, "__tests__/layout.marko", "3:6");
		}, 0, $scope1_id, "#text/0", 1, $sg__input_list, $sg__input_list, void 0, void 0, "__tests__/layout.marko_2*shell", $scope0_owned, 0);
		$scope0_reason && _scope($scope1_id, {}, "__tests__/layout.marko", "2:4");
	}, 1, "__tests__/layout.marko_0_#text#0/await", 1);
	_html("</nav><main>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/layout.marko", 0);
}, 0, 0);

// page-a.marko
const $template$2 = "<h1>A</h1><p> </p><!><button> </button>";
const $walks$2 = "bD l%b D l";
_shells({
	"__tests__/page-a.marko": "__tests__/page-a.marko !__tests__/page-a.marko_0;bD l%b D ;<h1>A</h1><p> </p><!><button> </button>",
	"__tests__/page-a.marko_1*shell": "__tests__/page-a.marko_1*shell,<p>wide</p>"
});
var page_a_default = _template_persisted("__tests__/page-a.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_wide = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>A</h1><p>${_patch_text($scope0_id, "#text/0", input.note, void 0, $scope0_owned, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			$scope0_reason && _scope($scope1_id, {}, "__tests__/page-a.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_wide, $sg__input_wide, void 0, void 0, ["__tests__/page-a.marko_1*shell"], $scope0_owned, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/page-a.marko_0");
	_patch_value($scope0_id, "__tests__/page-a.marko0", n, 1);
	$scope0_reason && _scope($scope0_id, { n }, "__tests__/page-a.marko", 0, { n: "1:6" });
}, 0, 0);

// page-b.marko
const $template$1 = "<h1>B</h1><p> </p><!><!>";
const $walks$1 = "bD l%c";
_shells({
	"__tests__/page-b.marko": "__tests__/page-b.marko;bD l%;<h1>B</h1><p> </p><!><!>",
	"__tests__/page-b.marko_1*shell": "__tests__/page-b.marko_1*shell,<p>wide</p>"
});
var page_b_default = _template_persisted("__tests__/page-b.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_wide = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<h1>B</h1><p>${_patch_text($scope0_id, "#text/0", input.note, void 0, $scope0_owned, 0)}</p>`);
	_if(() => {
		if (input.wide) {
			const $scope1_id = _scope_id();
			_html("<p>wide</p>");
			$scope0_reason && _scope($scope1_id, {}, "__tests__/page-b.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_wide, $sg__input_wide, void 0, void 0, ["__tests__/page-b.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/page-b.marko", 0);
}, 0, 0);

// template.marko
const $Layout_withLoadAssets = withLoadAssets(layout_default, "ready:__tests__/layout.marko", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "ready:__tests__/page-a.marko", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "ready:__tests__/page-b.marko", void 0, 1);
const $template = "<html><body></body></html>";
const $walks = "D l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D ;<html><body></body></html>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3)),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_3*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_4*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell,<p>home</p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 3), $si__input_page = _source_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_wide__closures = new Set();
	const $input_note__closures = new Set();
	const $input_page__closures = new Set();
	_html(`<html>${_flush_head()}<body>`);
	_if(() => {
		if (input.page === 0) {
			const $scope5_id = _scope_id();
			_html("<p>home</p>");
			$scope0_reason && _scope($scope5_id, {}, "__tests__/template.marko", "7:6");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 4) });
			const $childScope3 = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope3);
			$Layout_withLoadAssets({
				list: input.list,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _persisted_reason();
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.page === 1) {
							const $scope3_id = _scope_id();
							_set_serialize_reason({
								0: _mask_group($scope0_owned, 6),
								1: _mask_group($scope0_owned, 5)
							});
							const $childScope = _peek_scope_id();
							_patch_child($scope3_id, "#childScope/1", $childScope);
							$PageA_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_subscribe(_unfilled_if($scope0_owned, 6) && $input_note__closures, _subscribe(_unfilled_if($scope0_owned, 5) && $input_wide__closures, _scope($scope3_id, {
								_: _scope_with_id($scope2_id),
								"#childScope/1": _existing_scope($childScope)
							}, "__tests__/template.marko", "12:10")));
							return 0;
						} else {
							const $scope4_id = _scope_id();
							_set_serialize_reason({
								0: _mask_group($scope0_owned, 6),
								1: _mask_group($scope0_owned, 5)
							});
							const $childScope2 = _peek_scope_id();
							_patch_child($scope4_id, "#childScope/1", $childScope2);
							$PageB_withLoadAssets({
								wide: input.wide,
								note: input.note
							});
							_subscribe(_unfilled_if($scope0_owned, 6) && $input_note__closures, _subscribe(_unfilled_if($scope0_owned, 5) && $input_wide__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								"#childScope/1": _existing_scope($childScope2),
								"ClosureSignalIndex:input_wide": 1,
								"ClosureSignalIndex:input_note": 1
							}, "__tests__/template.marko", "15:10")));
							return 1;
						}
					}, $scope2_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_4*shell"], $scope0_owned, 3);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 3) && $input_page__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:8"));
					$sg__input_page || $scope0_reason && _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "10:6");
			return 1;
		}
	}, $scope0_id, "#body/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_5*shell", "__tests__/template.marko_1*shell"], $scope0_owned, 3);
	_html(`</body>${_el_resume($scope0_id, "#body/0", $sg__input_page)}`), _trailers("</html>");
	$scope0_reason && _scope($scope0_id, {
		input_page: $si__input_page && input.page,
		input_list: $si__input_page && input.list,
		input_wide: $si__input_page && input.wide,
		input_note: $si__input_page && input.note,
		"ClosureScopes:input_wide": $input_wide__closures,
		"ClosureScopes:input_note": $input_note__closures,
		"ClosureScopes:input_page": $input_page__closures
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_list: ["input.list"],
		input_wide: ["input.wide"],
		input_note: ["input.note"]
	});
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Layout_withLoadAssets
]);
