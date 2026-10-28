// tags/list.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["a>", $setup$1]);
_shells({
	a1: "a1 a7;D l%;<em> </em><!><!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& D l`)("b%c")};${((_w0) => `<!>${_w0}<button> </button>`)($template)}`)(),
	a0: "a0;D%;<b><!>!</b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_elide("a1", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_patch_fill($scope1_id, "va2", label);
			_html(`<em>${_text_resume($scope1_id, "a", label + n)}</em>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<b>${_text_resume($scope2_id, "a", label, void 0, 4, 0)}!</b>`);
					_scope($scope2_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a3");
			_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_show__closures, _scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			})));
		}, $scope0_id) });
	});
	const $childScope = _patch_child($scope0_id, "a", 0);
	list_default({ item: $item });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.show,
		h: n,
		i: _write_if($scope0_reason, 1) && $input_show__closures,
		j: $n__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.show, !_server_guard($scope0_reason, 1));
}, 1);
