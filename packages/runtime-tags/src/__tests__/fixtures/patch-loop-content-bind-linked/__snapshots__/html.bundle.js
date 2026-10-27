// tags/list.marko
const $template = "<button>toggle</button><button>pick</button><!><!>";
const $walks = " b b%c";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3; b b%;<button>toggle</button><button>pick</button><!><!>",
	b1: "b1 b6;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<button>pick</button>${_el_resume($scope0_id, "b")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_content_withhold(item?.content), _filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb0", item?.content);
		if ($scope0_page) _if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", item.content, {}, 0, 0, $wg__input_item);
				$scope0_page && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		$scope0_page && _scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 1);
	_script($scope0_id, "b2");
	_script($scope0_id, "b3");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb2" : "eb2", "f");
	_patch_fill($scope0_id, "vb4", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.onPick,
		h: open
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.onPick, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.note, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", label)}:${_patch_text($scope1_id, "b", input.note, 2, $scope0_reason, 0)}</em>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _patch_child($scope0_id, "a");
	list_default({
		onPick: _bind_resume(function() {
			console.log(input.note);
		}, "a0", $scope0_id),
		item: $item
	});
	$scope0_page && _scope($scope0_id, {
		d: input.note,
		f: _write_if($scope0_reason, 0) && $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1);
