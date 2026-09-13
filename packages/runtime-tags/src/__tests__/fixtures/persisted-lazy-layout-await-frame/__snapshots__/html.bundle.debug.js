// root.marko
const $template$5 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$5 = "EbD%n";
_shells({ "__tests__/root.marko": "__tests__/root.marko;EbD%;<html><body><header>site</header><main><!></main></body></html>" });
var root_default = _template_persisted("__tests__/root.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><header>site</header><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>"), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/root.marko", 0);
}, 1, 0);

// tags/icon.marko
const $template$4 = "<svg></svg>";
const $walks$4 = " b";
_shells({
	"__tests__/tags/icon.marko": "__tests__/tags/icon.marko; ;<svg></svg>",
	"__tests__/tags/icon.marko_1*shell": "__tests__/tags/icon.marko_1*shell; ;<path></path>"
});
var icon_default = _template_persisted("__tests__/tags/icon.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<svg${_patch_attr($scope0_id, "#svg/0", "viewBox", input.name, $scope0_reason, 0)}>`);
	_if(() => {
		if (input.name) {
			const $scope1_id = _scope_id();
			_html(`<path${_patch_attr($scope1_id, "#path/0", "d", input.name, $scope0_reason, 0)}></path>${_el_resume($scope1_id, "#path/0")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/icon.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#svg/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, ["__tests__/tags/icon.marko_1*shell"], $scope0_reason, 0);
	_html(`</svg>${_el_resume($scope0_id, "#svg/0")}`);
	$scope0_page && _scope($scope0_id, { input_name: _source_if($scope0_reason, 0) && input.name }, "__tests__/tags/icon.marko", 0, { input_name: ["input.name"] });
}, 0, 0);

// docs.marko
const $template$3 = "<nav><!></nav><article><!></article>";
const $walks$3 = "D%lD%l";
_shells({
	"__tests__/docs.marko_1*content": "__tests__/docs.marko_1*content;b%b%;<!><!><!><!>",
	"__tests__/docs.marko_0_#text#0/await": "__tests__/docs.marko_0_#text#0/await;b%b%;<!><!><!><!>",
	"__tests__/docs.marko": "__tests__/docs.marko;D%lD%;<nav><!></nav><article><!></article>",
	"__tests__/docs.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/docs.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $template$4),
	"__tests__/docs.marko_3*shell": "__tests__/docs.marko_3*shell;D ;<a> </a>"
});
var docs_default = _template_persisted("__tests__/docs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _source_guard($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_content = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_await($scope0_id, "#text/0", input.list, (list) => {
		const $scope1_id = _scope_id();
		_for_of(list, (item) => {
			const $scope3_id = _scope_id();
			_html(`<a>${_patch_text($scope3_id, "#text/0", item, void 0, $scope0_reason, 0)}</a>`);
			_scope($scope3_id, {}, "__tests__/docs.marko", "3:6");
		}, 0, $scope1_id, "#text/0", 1, $sg__input_list, $sg__input_list, void 0, void 0, "__tests__/docs.marko_3*shell", $scope0_reason, 0);
		_if(() => {
			if (list[0]) {
				const $scope2_id = _scope_id();
				_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				icon_default({ name: list[0] });
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/docs.marko", "6:6");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $sg__input_list, $sg__input_list, void 0, void 0, ["__tests__/docs.marko_2*shell"], $scope0_reason, 0);
		$scope0_page && _scope($scope1_id, { list_0: _source_if($scope0_reason, 0) && list?.[0] }, "__tests__/docs.marko", "2:4", { list_0: ["list[0]", "2:10"] });
	}, 1, "__tests__/docs.marko_0_#text#0/await", 1);
	_html("</nav><article>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</article>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/docs.marko", 0);
}, 0, () => [icon_default]);

// page-a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
_shells({ "__tests__/page-a.marko": "__tests__/page-a.marko,<h1>A</h1>" });
var page_a_default = _template_persisted("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>A</h1>");
}, 0, 0);

// page-b.marko
const $template$1 = "<h1>B</h1>";
const $walks$1 = "b";
_shells({ "__tests__/page-b.marko": "__tests__/page-b.marko,<h1>B</h1>" });
var page_b_default = _template_persisted("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>B</h1>");
}, 0, 0);

// template.marko
const $Docs_withLoadAssets = withLoadAssets(docs_default, "ready:__tests__/docs.marko", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "ready:__tests__/page-a.marko", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "ready:__tests__/page-b.marko", void 0, 1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$5);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$5);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$5), ((_w0) => `<!>${_w0}<!>`)($template$5)),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3)),
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell,<p>home</p>",
	"__tests__/template.marko_5*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_5*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)),
	"__tests__/template.marko_6*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_6*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_page = _source_guard($scope0_reason, 1), $si__input_page = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	const $input_list__closures = new Set();
	_set_serialize_reason(0);
	const $childScope4 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope4);
	root_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page === 0) {
				const $scope4_id = _scope_id();
				_html("<p>home</p>");
				$scope0_page && _scope($scope4_id, {}, "__tests__/template.marko", "7:4");
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope3 = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope3);
				$Docs_withLoadAssets({
					list: input.list,
					content: _content_elide("__tests__/template.marko_3*content", () => {
						const $scope3_reason = _scope_reason();
						const $scope3_id = _scope_id();
						_if(() => {
							if (input.page === 1) {
								const $scope5_id = _scope_id();
								const $childScope = _peek_scope_id();
								_patch_child($scope5_id, "#childScope/1", $childScope);
								$PageA_withLoadAssets({});
								_scope($scope5_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "12:8");
								return 0;
							} else {
								const $scope6_id = _scope_id();
								const $childScope2 = _peek_scope_id();
								_patch_child($scope6_id, "#childScope/1", $childScope2);
								$PageB_withLoadAssets({});
								_scope($scope6_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "15:8");
								return 1;
							}
						}, $scope3_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_5*shell", "__tests__/template.marko_6*shell"], $scope0_reason, 1);
						$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope3_id, {
							_: _scope_with_id($scope2_id),
							"ClosureSignalIndex:input_page": 1
						}, "__tests__/template.marko", "11:6"));
						$sg__input_page || $scope0_page && _resume_branch($scope3_id);
					}, $scope2_id)
				});
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_list__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope3)
				}, "__tests__/template.marko", "10:4"));
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_4*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"));
		$sg__input_page || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		input_page: $si__input_page && input.page,
		input_list: $si__input_page && input.list,
		"ClosureScopes:input_page": $input_page__closures,
		"ClosureScopes:input_list": $input_list__closures,
		"#childScope/0": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_list: ["input.list"]
	});
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Docs_withLoadAssets,
	root_default
]);
