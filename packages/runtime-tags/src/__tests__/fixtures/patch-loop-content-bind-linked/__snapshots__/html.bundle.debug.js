// tags/list.marko
const $template$1 = "<button>toggle</button><button>pick</button><!><!>";
const $walks$1 = " b b%c";
const $setup$1 = [[], ["__tests__/tags/list.marko_0"]];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko !__tests__/tags/list.marko_0; b b%;<button>toggle</button><button>pick</button><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell __tests__/tags/list.marko_1_open#0:7/init;b%;<!><!><!>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<button>pick</button>${_el_resume($scope0_id, "#button/1")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_content_withhold(item?.content), _filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/list.marko_fill1", item?.content);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
				$scope0_page && _scope($scope2_id, {}, "__tests__/tags/list.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		$scope0_page && _scope($scope1_id, {
			item_content: item?.content,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/list.marko", "4:2", { item_content: ["item.content", "4:6"] });
	}, 0, $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 1);
	_script($scope0_id, "__tests__/tags/list.marko_0_input_onPick#5");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/list.marko_0_input_onPick#5" : "PatchEffect:__tests__/tags/list.marko_0_input_onPick#5", "input_onPick");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/list.marko_fill0", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_onPick: input.onPick,
		open
	}, "__tests__/tags/list.marko", 0, {
		input_onPick: ["input.onPick"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_onPick", input.onPick, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", label)}:${_patch_text($scope1_id, "#text/1", input.note, 2, $scope0_reason, 0)}</em>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_1_input_note#0:3/subscribe");
		}, $scope0_id, () => [{ label }]) });
	});
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	list_default({
		onPick: _bind_resume(function() {
			console.log(input.note);
		}, "__tests__/template.marko_0/onPick", $scope0_id),
		item: $item
	});
	$scope0_page && _scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 0) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
