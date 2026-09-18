// layout.marko
const $template$2 = "<header><button class=menu> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
_shells({ b: "b !b0;D D mD%;<header><button class=menu> </button></header><main><!></main>" });
var layout_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button class=menu>${_text_resume($scope0_id, "b", "open")}</button>${_el_resume($scope0_id, "a")}</header><main>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "c", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "c", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", open, 1);
	$scope0_page && _scope($scope0_id, { g: open });
}, 0, 0);

// home.marko
const $template$1 = "<button class=home>home:<!></button>";
const $walks = " Db%l";
_shells({ a: "a !a0; Db%;<button class=home>home:<!></button>" });
var home_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=home>home:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_page && _scope($scope0_id, { c: count });
}, 0, 0);

// page.marko
const $template = "<!><!><!>";
_shells({
	c1: "c1;Db%;<span class=limit>of <!></span>",
	c2: "c2,loading",
	c3: "c3;Db%;<span class=limit>of <!></span>",
	c4: "c4;b%;<!><!><!>",
	c5: "c5,failed",
	c6: "c6 c17 c18!c10; b%bD%b%l%;<button class=next>next</button><!><span class=of><!><!></span><!><!>",
	c: "c !;b%;<!><!><!>",
	c7: "c7;Db%;<span class=prev>prev <!></span>"
});
var page_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $current__closures = /* @__PURE__ */ new Set();
	const $page__closures = /* @__PURE__ */ new Set();
	const $go_pending__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const current = $global$1.params.page;
	let page = current;
	const go = _act(_resume(function* (next) {
		page = next;
	}, "c0", $scope0_id));
	_try($scope0_id, "a", _content_resume("c6", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button class=next>next</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			if (current > 1) {
				const $scope2_id = _scope_id();
				_html(`<span class=prev>prev ${_patch_text($scope2_id, "a", current - 1, 2)}</span>`);
				_subscribe(_unfilled_if() && $current__closures, _scope($scope2_id, {}));
				return 0;
			}
		}, $scope1_id, "b", 1, $scope0_page, $scope0_page, void 0, void 0, ["c7"]);
		_html(`<span class=of>${_text_resume($scope1_id, "c", page)}${_text_resume($scope1_id, "d", go.pending ? "…" : "", 2)}</span>`);
		_try($scope1_id, "e", _content_resume("c4", () => {
			const $scope4_id = _scope_id();
			_scope_reason();
			_await($scope4_id, "a", $global$1.total, (total) => {
				const $scope6_id = _scope_id();
				_html(`<span class=limit>of ${_patch_text($scope6_id, "a", Math.ceil(total / 10), 2)}</span>`);
				_scope($scope6_id, {});
			}, 1, "c3", 1);
			_global_subscribe("c9", $scope4_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_shell("c2", $scope1_id) }) });
		_script($scope1_id, "c10");
		_subscribe($go_pending__closures, _subscribe($page__closures, _subscribe($current__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }))));
	}, $scope0_id), { catch: attrTag({ content: _content_shell("c5", $scope0_id) }) }, 1);
	_global_subscribe("c8", $scope0_id);
	_patch_value($scope0_id, "c1", page, 1);
	_patch_value($scope0_id, "c2", go, 1);
	$scope0_page ? _scope($scope0_id, {
		e: current,
		f: page,
		h: go,
		l: $page__closures,
		m: $go_pending__closures
	}) : _patch_value($scope0_id, "c0", current);
	$scope0_page && _resume_branch($scope0_id);
}, 0, 1);

// template.marko
const $Home_withLoadAssets = withLoadAssets(home_default, "_a", void 0, 1);
const $Page_withLoadAssets = withLoadAssets(page_default, "_c", void 0, 1);
_shells({
	d0: "d0;b%;<!><!><!>",
	d: /*@__PURE__*/ ((_w0, _w1) => `d;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$1), ((_w0) => `<!>${_w0}<!>`)($template$2)),
	d1: /*@__PURE__*/ ((_w0, _w1) => `d1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	d2: /*@__PURE__*/ ((_w0, _w1) => `d2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_patch("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_page = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope3);
	layout_default({ content: _content_elide("d0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "b", $childScope);
				$Home_withLoadAssets({});
				_scope($scope2_id, { b: _existing_scope($childScope) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id();
				_patch_child($scope3_id, "b", $childScope2);
				$Page_withLoadAssets({});
				_scope($scope3_id, { b: _existing_scope($childScope2) });
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d1", "d2"], $scope0_reason, 0);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_page || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, {
		e: $input_page__closures,
		a: _existing_scope($childScope3)
	});
}, 1, () => [
	$Home_withLoadAssets,
	$Page_withLoadAssets,
	layout_default
]);
