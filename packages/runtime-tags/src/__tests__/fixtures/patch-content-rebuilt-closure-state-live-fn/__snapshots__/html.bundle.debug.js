// tags/list.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/probe.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko; ;<output></output>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_get#3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/probe.marko_0_get#3" : "PatchEffect:__tests__/tags/probe.marko_0_get#3", "get");
	$scope0_page ? _scope($scope0_id, { get: input.get }, "__tests__/tags/probe.marko", 0, { get: "1:10" }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:get", input.get, !_server_guard($scope0_reason, 0));
});

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<button>add</button>${_w0}${_w1}`)($template$3, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("b%c", " b");
const $setup$1 = _shell_setup([[], ["__tests__/tags/child.marko_0"]], ["#childScope/1>", $setup$3], ["#childScope/2>", $setup$2]);
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content __tests__/tags/child.marko_1_input_show#0:5/subscribe;b%;<!><!><!>",
	"__tests__/tags/child.marko": /*@__PURE__*/ (() => `__tests__/tags/child.marko${_shell_marker($setup$1)};${((_w0, _w1) => ` b/${_w0}&/${_w1}&`)("b%c", " b")};${((_w0, _w1) => `<button>add</button>${_w0}${_w1}`)($template$3, $template$2)}`)(),
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell,<span>shown</span>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_show = _server_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.show, !$sg__input_show);
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_elide("__tests__/tags/child.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<span>shown</span>");
					$scope1_page && $wi__input_show && _scope($scope2_id, {}, "__tests__/tags/child.marko", "5:13");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/child.marko_2*shell"], $scope0_reason, 0);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_show#0:5/init");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "5:6"));
			$wg__input_show || _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	list_default({ item: $item });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/2", 1);
	probe_default({ get: _bind_resume(function() {
		return "s:" + input.show;
	}, "__tests__/tags/child.marko_0/get", $scope0_id) });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", items, 1);
	$scope0_page && _scope($scope0_id, {
		input_show: input.show,
		items,
		"ClosureScopes:input_show/7": $wi__input_show && $input_show__closures,
		"#childScope/1": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/tags/child.marko", 0, {
		input_show: ["input.show"],
		items: "1:6"
	});
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({ show: input.show });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
