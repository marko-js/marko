// tags/list.marko
const $template = "<button>toggle</button><button>pick</button><!><!>";
const $walks = " b b%c";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3; b b%;<button>toggle</button><button>pick</button><!><!>",
	b1: "b1 b6;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1), $fg__input_onPick = _filled_guard($scope0_reason, 0), $sg__input_item = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}<button>pick</button>${_el_mark($scope0_id, "b")}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xd", item?.content, !$sg__input_item);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", item.content, {}, 0, 0, 0, $wg__input_item);
				_client_guard($scope0_reason, 1) && _patch_render($scope2_id, "b0");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_filled_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0", "d");
		_scope($scope1_id, {
			d: item?.content,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 0, "b1", $scope0_reason, 1);
	_script($scope0_id, "b2", 1, $fg__input_onPick, "f");
	_script($scope0_id, "b3");
	_patch_fill($scope0_id, "vb4", open, 1);
	_scope($scope0_id, {
		f: input.onPick,
		h: open
	}) || $fg__input_onPick && _patch_write($scope0_id, "xf", input.onPick, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	$fg__input_note && _patch_write($scope0_id, "xd", input.note, !_server_guard($scope0_reason, 0));
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", label, 1, 4, 0)}:${_text_mark($scope1_id, "b", input.note, 2, $scope0_reason, 0)}</em>`);
			$cg__input_note && _patch_render($scope1_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_note && "a1");
		}, $scope0_id, () => [{ 2: label }]) });
	});
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	list_default({
		onPick: _bind_resume(function() {
			console.log(input.note);
		}, "a0", $scope0_id),
		item: $item
	});
	_patch_child_end();
	$fg__input_note && _patch_subscribers($scope0_id, "a3", "d");
	_scope($scope0_id, {
		d: input.note,
		f: _write_if($scope0_reason, 0) && $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1);
