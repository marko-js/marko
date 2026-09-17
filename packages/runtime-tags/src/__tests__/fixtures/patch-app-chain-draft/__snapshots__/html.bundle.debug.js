// layout.marko
const $template$3 = "<header><button class=menu> </button></header><main><!></main>";
const $walks$3 = "D D mD%l";
_shells({ "__tests__/layout.marko": "__tests__/layout.marko !__tests__/layout.marko_0;D D mD%;<header><button class=menu> </button></header><main><!></main>" });
var layout_default = _template_patch("__tests__/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button class=menu>${_text_resume($scope0_id, "#text/1", open ? "close" : "open")}</button>${_el_resume($scope0_id, "#button/0")}</header><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/2", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "#text/2", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_script($scope0_id, "__tests__/layout.marko_0");
	_patch_value($scope0_id, "__tests__/layout.marko0", open, 1);
	$scope0_page && _scope($scope0_id, { open }, "__tests__/layout.marko", 0, { open: "1:6" });
}, 0, 0);

// home.marko
const $template$2 = "<button class=home>home:<!></button>";
const $walks$2 = " Db%l";
_shells({ "__tests__/home.marko": "__tests__/home.marko !__tests__/home.marko_0; Db%;<button class=home>home:<!></button>" });
var home_default = _template_patch("__tests__/home.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=home>home:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/home.marko_0");
	_patch_value($scope0_id, "__tests__/home.marko0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/home.marko", 0, { count: "1:6" });
}, 0, 0);

// page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/page.marko_6*content": "__tests__/page.marko_6*content;Db%;<span class=limit>of <!></span>",
	"__tests__/page.marko_5*content": "__tests__/page.marko_5*content,loading",
	"__tests__/page.marko_4_#text#0/await": "__tests__/page.marko_4_#text#0/await;Db%;<span class=limit>of <!></span>",
	"__tests__/page.marko_4*content": "__tests__/page.marko_4*content;b%;<!><!><!>",
	"__tests__/page.marko_3*content": "__tests__/page.marko_3*content,failed",
	"__tests__/page.marko_1*content": "__tests__/page.marko_1*content __tests__/page.marko_1_page#5/init __tests__/page.marko_1_go_pending#9/init!__tests__/page.marko_1; b%bD%b%l%;<button class=next>next</button><!><span class=of><!><!></span><!><!>",
	"__tests__/page.marko": "__tests__/page.marko !;b%;<!><!><!>",
	"__tests__/page.marko_2*shell": "__tests__/page.marko_2*shell;Db%;<span class=prev>prev <!></span>"
});
var page_default = _template_patch("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $current__closures = new Set();
	const $global_total__closures = new Set();
	const $page__closures = new Set();
	const $go_pending__closures = new Set();
	const $global$1 = $global();
	const params = $global$1.params;
	const current = params.page;
	const _pageSource = current;
	let page = _pageSource;
	const go = _act(_resume(function* (next) {
		page = next;
	}, "__tests__/page.marko_0/go", $scope0_id));
	_try($scope0_id, "#text/0", _content_resume("__tests__/page.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button class=next>next</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (current > 1) {
				const $scope2_id = _scope_id();
				_html(`<span class=prev>prev ${_patch_text($scope2_id, "#text/0", current - 1, 2)}</span>`);
				_subscribe(_unfilled_if() && $current__closures, _scope($scope2_id, {}, "__tests__/page.marko", "7:4"));
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $scope0_page, $scope0_page, void 0, void 0, ["__tests__/page.marko_2*shell"]);
		_html(`<span class=of>${_text_resume($scope1_id, "#text/2", page)}${_text_resume($scope1_id, "#text/3", go.pending ? "…" : "", 2)}</span>`);
		_try($scope1_id, "#text/4", _content_resume("__tests__/page.marko_4*content", () => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_await($scope4_id, "#text/0", $global$1.total, (total) => {
				const $scope6_id = _scope_id();
				const limit = Math.ceil(total / 10);
				_html(`<span class=limit>of ${_patch_text($scope6_id, "#text/0", limit, 2)}</span>`);
				_scope($scope6_id, {}, "__tests__/page.marko", "12:6");
			}, 1, "__tests__/page.marko_4_#text#0/await", 1);
			_global_subscribe("__tests__/page.marko_4_$global_total#10/global", $scope4_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_shell("__tests__/page.marko_5*content", $scope1_id) }) });
		_script($scope1_id, "__tests__/page.marko_1");
		_subscribe($go_pending__closures, _subscribe($page__closures, _subscribe($current__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/page.marko", "5:2"))));
	}, $scope0_id), { catch: attrTag({ content: _content_shell("__tests__/page.marko_3*content", $scope0_id) }) }, 1);
	_global_subscribe("__tests__/page.marko_0_$global_params#3/global", $scope0_id);
	_patch_value($scope0_id, "__tests__/page.marko1", page, 1);
	_patch_value($scope0_id, "__tests__/page.marko2", go, 1);
	$scope0_page ? _scope($scope0_id, {
		current,
		page,
		go,
		"ClosureScopes:page": $page__closures,
		"ClosureScopes:go_pending": $go_pending__closures
	}, "__tests__/page.marko", 0, {
		current: "2:8",
		page: "3:8",
		go: "4:9"
	}) : _patch_value($scope0_id, "__tests__/page.marko0", current);
	$scope0_page && _resume_branch($scope0_id);
}, 0, 1);

// template.marko
const $Home_withLoadAssets = withLoadAssets(home_default, "ready:__tests__/home.marko", void 0, 1);
const $Page_withLoadAssets = withLoadAssets(page_default, "ready:__tests__/page.marko", void 0, 1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$3), ((_w0) => `<!>${_w0}<!>`)($template$3)),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_3*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_page = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope3);
	layout_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/1", $childScope);
				$Home_withLoadAssets({});
				_scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id();
				_patch_child($scope3_id, "#childScope/1", $childScope2);
				$Page_withLoadAssets({});
				_scope($scope3_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "9:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_3*shell"], $scope0_reason, 0);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		$sg__input_page || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_page": $input_page__closures,
		"#childScope/0": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1, () => [
	$Home_withLoadAssets,
	$Page_withLoadAssets,
	layout_default
]);
