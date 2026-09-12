// tags/code-block.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;D ;<div> </div>",
	b2: "b2;D ;<span> </span>"
});
var code_block_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_text_length = _source_guard($scope0_reason, 4), $si__input_text = _source_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const highlight = _resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b class=${$global$1.theme}>${input.cursor.content((s) => s)}</b>`);
	}, "b0", $scope0_id);
	_if(() => {
		if (input.text.length > 2) {
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_html($scope1_id, "a", highlight(input.text), void 0, $scope0_owned, 0)}</div>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_html($scope2_id, "a", highlight(input.text), void 0, $scope0_owned, 0)}</span>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_text_length, $sg__input_text_length, void 0, void 0, ["b1", "b2"], $scope0_owned, 4);
	_global_subscribe("b3", $scope0_id);
	$scope0_reason ? _scope($scope0_id, {
		d: $si__input_text && input.cursor,
		e: ($scope0_reason || _source_if($scope0_reason, 1)) && input.text,
		g: $si__input_text && highlight
	}) : (_filled_guard($scope0_owned, 3) && _client_guard($scope0_owned, 4) && _patch_value($scope0_id, "b0", input.text), _filled_guard($scope0_owned, 2) && _client_guard($scope0_owned, 4) && _patch_value($scope0_id, "b1", highlight), _filled_guard($scope0_owned, 2) && _patch_write($scope0_id, "d", input.cursor));
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 0),
		3: _mask_group($scope0_owned, 0),
		4: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "a0")
		}
	});
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [code_block_default]);
