// layout.marko
const $template$2 = "<header><button> </button></header><main><!></main>";
const $walks$2 = "D D mD%l";
_shells({ a: "a !a0;D D mD%;<header><button> </button></header><main><!></main>" });
var layout_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button>${_text_resume($scope0_id, "b", "open")}</button>${_el_resume($scope0_id, "a")}</header><main>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "c", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "c", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</main>");
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", open, 1);
	$scope0_reason && _scope($scope0_id, { g: open });
}, 0, 0);

// page-a.marko
const $template$1 = "<button class=a>a:<!></button>";
const $walks$1 = " Db%l";
_shells({ b: "b !b0; Db%;<button class=a>a:<!></button>" });
var page_a_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", count, 1);
	$scope0_reason && _scope($scope0_id, { c: count });
}, 0, 0);

// page-b.marko
const $template = "<button class=b>b:<!>:<!>:<!></button>";
const $walks = " Db%c%c%l";
_shells({ c: "c !c1; Db%c%c%;<button class=b>b:<!>:<!>:<!></button>" });
var page_b_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const [q, issues] = $global().search;
	let count = 0;
	_html(`<button class=b>b:${_patch_text($scope0_id, "b", q, 2)}:${_patch_text($scope0_id, "c", issues ? "!" : "", 2)}:${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_global_subscribe("c0", $scope0_id);
	_script($scope0_id, "c1");
	_patch_value($scope0_id, "c0", count, 1);
	$scope0_reason && _scope($scope0_id, { i: count });
}, 0, 1);

// template.marko
const $PageA_withLoadAssets = withLoadAssets(page_a_default, "_b", void 0, 1);
const $PageB_withLoadAssets = withLoadAssets(page_b_default, "_c", void 0, 1);
_shells({
	d0: "d0;b%;<!><!><!>",
	d: /*@__PURE__*/ ((_w0, _w1) => `d !d3;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)($walks$2), ((_w0) => `<!>${_w0}<!>`)($template$2)),
	d1: /*@__PURE__*/ ((_w0, _w1) => `d1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	d2: /*@__PURE__*/ ((_w0, _w1) => `d2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_page = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	$global();
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope3);
	layout_default({ content: _content_elide("d0", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "b", $childScope);
				$PageA_withLoadAssets({});
				_scope($scope2_id, { b: _existing_scope($childScope) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id();
				_patch_child($scope3_id, "b", $childScope2);
				$PageB_withLoadAssets({});
				_scope($scope3_id, { b: _existing_scope($childScope2) });
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_page, $sg__input_page, void 0, void 0, ["d1", "d2"], $scope0_owned, 0);
		$scope0_reason && _subscribe($input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_page || $scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id) });
	_script($scope0_id, "d3");
	$scope0_reason && _scope($scope0_id, {
		e: $input_page__closures,
		a: _existing_scope($childScope3)
	});
}, 1, 1);
