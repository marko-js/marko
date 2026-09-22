// page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/page.marko_5*content": "__tests__/page.marko_5*content,Loading",
	"__tests__/page.marko_3*content": "__tests__/page.marko_3*content __tests__/page.marko_3_page#3/init;Db%c%l%;<p class=summary>Page <!> of <!></p><!><!>",
	"__tests__/page.marko_2_#text#0/await": "__tests__/page.marko_2_#text#0/await __tests__/page.marko_3_page#3/init;Db%c%l%;<p class=summary>Page <!> of <!></p><!><!>",
	"__tests__/page.marko_2*content": "__tests__/page.marko_2*content;b%;<!><!><!>",
	"__tests__/page.marko_1*content": "__tests__/page.marko_1*content __tests__/page.marko_1_page#3/init;Db%l%;<span>Page <!></span><!><!>",
	"__tests__/page.marko": "__tests__/page.marko !;b%;<!><!><!>"
});
var page_default = _template_patch("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $page__closures = new Set();
	const $global_total__closures = new Set();
	const $global$1 = $global();
	const _pageSource = $global$1.page;
	let page = _pageSource;
	const go = _act(_resume((next) => {
		page = next;
	}, "__tests__/page.marko_0/go", $scope0_id));
	_try($scope0_id, "#text/0", _content_resume("__tests__/page.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>Page ${_text_resume($scope1_id, "#text/0", page, 2)}</span>`);
		_try($scope1_id, "#text/1", _content_resume("__tests__/page.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_await($scope2_id, "#text/0", $global$1.total, (total) => {
				const $scope3_id = _scope_id();
				_script($scope3_id, "__tests__/page.marko_3_page#3/pending");
				_patch_value($scope3_id, "__tests__/page.marko3", total);
				_html(`<p class=summary>Page ${_text_resume($scope3_id, "#text/0", page, 2)} of ${_patch_text($scope3_id, "#text/1", total, 2)}</p>`);
				if ($scope0_page) _if(() => {
					if (page < total) {
						const $scope4_id = _scope_id();
						_script($scope4_id, "__tests__/page.marko_4_page#3/pending");
						_html(`<a${_attr("href", `?page=${page + 1}`)}>Next</a>${_el_resume($scope4_id, "#a/0")}`);
						_script($scope4_id, "__tests__/page.marko_4");
						_scope($scope4_id, { "ClosureSignalIndex:page": 2 }, "__tests__/page.marko", "8:8");
						return 0;
					} else {
						const $scope6_id = _scope_id();
						_html("<span>Last page</span>");
						_scope($scope6_id, {}, "__tests__/page.marko", "11:8");
						return 1;
					}
				}, $scope3_id, "#text/2", 1, 1, 1, 0, 1);
				_scope($scope3_id, {
					total,
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:page": 1
				}, "__tests__/page.marko", "6:6", { total: "6:12" });
			}, 1, "__tests__/page.marko_2_#text#0/await", 1);
			_global_subscribe("__tests__/page.marko_2_$global_total#6/global", $scope2_id);
			_subscribe(_unfilled_if() && $global_total__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/page.marko", "5:4"));
			_resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_shell("__tests__/page.marko_5*content", $scope1_id) }) }, 1);
		_subscribe($page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/page.marko", "3:2"));
	}, $scope0_id), {}, 1);
	_global_subscribe("__tests__/page.marko_0_$global_page#2/global", $scope0_id);
	_patch_value($scope0_id, "__tests__/page.marko1", page, 1);
	_patch_value($scope0_id, "__tests__/page.marko2", go, 1);
	$scope0_page ? _scope($scope0_id, {
		_pageSource,
		page,
		go,
		"ClosureScopes:page": $page__closures
	}, "__tests__/page.marko", 0, {
		_pageSource: 0,
		page: "1:8",
		go: "2:9"
	}) : _patch_value($scope0_id, "__tests__/page.marko0", _pageSource);
	$scope0_page && _resume_branch($scope0_id);
}, 0, 1);

// template.marko
const $Page_withLoadAssets = withLoadAssets(page_default, "ready:__tests__/page.marko", void 0, 1);
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>Book details</p>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_details = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.details) {
			const $scope1_id = _scope_id();
			_html("<p>Book details</p>");
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/1", $childScope);
			$Page_withLoadAssets({});
			_scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_details, $sg__input_details, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [$Page_withLoadAssets]);
