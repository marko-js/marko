// tags/file-store.marko
_shells({ d: "d !d1," });
var file_store_default = _template_patch("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let files = [];
	const $return = files;
	_script($scope0_id, "d1", 0);
	_patch_effect($scope0_id, "d1", "c");
	_patch_bind($scope0_id, "U", _resume((_new_files) => {
		files = _new_files;
	}, "d0", $scope0_id) || void 0);
	_patch_value($scope0_id, "d2", files, 1);
	$scope0_page ? _scope($scope0_id, {
		c: input.value,
		U: _resume((_new_files) => {
			files = _new_files;
		}, "d0", $scope0_id) || void 0
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "c", input.value);
	$scope0_page && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/file-tabs.marko
const $template$3 = "<p> </p><button>+</button>";
const $walks$2 = "D l b";
_shells({ e: "e !e1;D l ;<p> </p><button>+</button>" });
var file_tabs_default = _template_patch("e", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tabs = input.files;
	input.filesChange && _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "e0", tabs);
	_html(`<p>${_text_resume($scope0_id, "a", tabs.map((tab) => tab.path).join())}</p><button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "e1");
	_patch_write($scope0_id, "e", input.files, 1);
	_patch_write($scope0_id, "f", input.filesChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "e2");
	_patch_value($scope0_id, "e0", tabs, 1);
	_patch_bind($scope0_id, "i", input.filesChange || void 0);
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 2) && input.files,
		f: _source_if($scope0_reason, 1) && input.filesChange,
		h: tabs,
		i: input.filesChange || void 0
	});
}, 0, 0);

// tags/file-panes.marko
const $template$2 = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var file_panes_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_first = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.first;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_first, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/file-host.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $template$3),
	b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D%l"), $template$2)
});
var file_host_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_files__closures = /* @__PURE__ */ new Set();
	const $input_filesChange__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	file_panes_default({ first: attrTag({ content: _content_elide("b0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		file_tabs_default({
			files: input.files,
			filesChange: input.filesChange
		});
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_filesChange__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_files__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		})));
	}, $scope0_id) }) });
	$scope0_page && _scope($scope0_id, {
		f: $input_files__closures,
		g: $input_filesChange__closures,
		a: _existing_scope($childScope2)
	});
}, 0, () => [file_tabs_default, file_panes_default]);

// tags/route-pg.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1);
_shells({ f: /*@__PURE__*/ ((_w0, _w1) => `f;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1), ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1)) });
var route_pg_default = _template_patch("f", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let files = file_store_default({ value: [{ path: "a" }] });
	_var($scope0_id, "b", $childScope, "f1");
	const $childScope2 = _peek_scope_id();
	if ($scope0_page || _must_render(file_host_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "c", $childScope2);
		file_host_default({
			files,
			filesChange: _resume((_new_files) => {
				files = _new_files;
			}, "f0", $scope0_id)
		});
	}
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 0, () => [file_store_default, file_host_default]);

// template.marko
const $Route_withLoadAssets = withLoadAssets(route_pg_default, "_f", void 0, 1);
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Route_withLoadAssets({});
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [$Route_withLoadAssets]);
