// root.marko
const $template$4 = "<html><body><header>site</header><main><!></main></body></html>";
const $walks$4 = "EbD%n";
_shells({ "__tests__/root.marko": "__tests__/root.marko;EbD%;<html><body><header>site</header><main><!></main></body></html>" });
var root_default = _template_persisted("__tests__/root.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><header>site</header><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</main>"), _trailers("</body></html>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/root.marko", 0);
}, 1, 0);

// docs.marko
const $template$3 = "<nav>docs</nav><article><!></article>";
const $walks$3 = "bD%l";
_shells({ "__tests__/docs.marko": "__tests__/docs.marko;bD%;<nav>docs</nav><article><!></article>" });
var docs_default = _template_persisted("__tests__/docs.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<nav>docs</nav><article>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</article>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/docs.marko", 0);
}, 0, 0);

// page-a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
_shells({ "__tests__/page-a.marko": "__tests__/page-a.marko,<h1>A</h1>" });
var page_a_default = _template_persisted("__tests__/page-a.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<h1>A</h1>");
}, 0, 0);

// page-b.marko
const $template$1 = "<h1>B</h1>";
const $walks$1 = "b";
_shells({ "__tests__/page-b.marko": "__tests__/page-b.marko,<h1>B</h1>" });
var page_b_default = _template_persisted("__tests__/page-b.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<h1>B</h1>");
}, 0, 0);

// template.marko
const $Docs_withLoadAssets = withLoadAssets(docs_default, "ready:__tests__/docs.marko", void 0, 1);
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "ready:__tests__/page-a.marko", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "ready:__tests__/page-b.marko", void 0, 1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$4);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$4);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$4), ((_w0) => `<!>${_w0}<!>`)($template$4)),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3)),
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell,<p>home</p>",
	"__tests__/template.marko_5*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_5*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)),
	"__tests__/template.marko_6*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_6*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	_set_serialize_reason(0);
	const $childScope4 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope4);
	root_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page === 0) {
				const $scope4_id = _scope_id();
				_html("<p>home</p>");
				$scope0_reason && _scope($scope4_id, {}, "__tests__/template.marko", "7:4");
				return 0;
			} else {
				const $scope2_id = _scope_id();
				_set_serialize_reason(0);
				const $childScope3 = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope3);
				$Docs_withLoadAssets({ content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _persisted_reason();
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
					}, $scope3_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_5*shell", "__tests__/template.marko_6*shell"], $scope0_owned, 0);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 0) && $input_page__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_page": 1
					}, "__tests__/template.marko", "11:6"));
					$sg__input_page || $scope0_reason && _resume_branch($scope3_id);
				}, $scope2_id) });
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope3)
				}, "__tests__/template.marko", "10:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_4*shell", "__tests__/template.marko_2*shell"], $scope0_owned, 0);
		$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"));
		$sg__input_page || $scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_reason && _scope($scope0_id, {
		input_page: _source_if($scope0_reason, 0) && input.page,
		"ClosureScopes:input_page": $input_page__closures,
		"#childScope/0": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, { input_page: ["input.page"] });
}, 1, () => [
	$PageA_withLoadAssets,
	$PageB_withLoadAssets,
	$Docs_withLoadAssets,
	root_default
]);
