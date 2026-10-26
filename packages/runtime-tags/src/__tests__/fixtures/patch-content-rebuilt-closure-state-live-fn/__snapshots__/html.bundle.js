// tags/list.marko
const $template$2 = "<!><!><!>";
const $setup$3 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;b%;<!><!><!>"
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item, void 0, 2, $scope0_reason, 0);
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c0", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// tags/probe.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ d: "d; ;<output></output>" });
var probe_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hd0" : "ed0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>add</button>${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("b%c", " b");
const $setup$1 = _shell_setup([[], ["b4"]], ["b>", $setup$3], ["c>", $setup$2]);
_shells({
	b2: "b2 b8;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("b%c", " b")};${((_w0, _w1) => `<button>add</button>${_w0}${_w1}`)($template$2, $template$1)}`)(),
	b1: "b1,<span>shown</span>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_show = _server_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb5", input.show, !$sg__input_show);
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_elide("b2", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<span>shown</span>");
					$scope1_page && $wi__input_show && _scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b3");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			$wg__input_show || _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "b");
	list_default({ item: $item });
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "c");
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "b0", $scope0_id) });
	_script($scope0_id, "b4");
	_patch_fill($scope0_id, "vb6", items, 1);
	$scope0_page && _scope($scope0_id, {
		f: input.show,
		g: items,
		h: $wi__input_show && $input_show__closures,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({ show: input.show });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
