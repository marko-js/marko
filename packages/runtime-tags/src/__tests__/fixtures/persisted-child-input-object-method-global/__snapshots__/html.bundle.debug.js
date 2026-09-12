// tags/code-block.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/code-block.marko": "__tests__/tags/code-block.marko !;b%;<!><!><!>",
	"__tests__/tags/code-block.marko_1*shell": "__tests__/tags/code-block.marko_1*shell;D ;<div> </div>",
	"__tests__/tags/code-block.marko_2*shell": "__tests__/tags/code-block.marko_2*shell;D ;<span> </span>"
});
var code_block_default = _template_persisted("__tests__/tags/code-block.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_text_length = _source_guard($scope0_reason, 4), $si__input_text = _source_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const highlight = _resume(function(text) {
		return text.replace(input.cursor.test, (m) => `<b class=${$global$1.theme}>${input.cursor.content((s) => s)}</b>`);
	}, "__tests__/tags/code-block.marko_0/highlight", $scope0_id);
	_if(() => {
		if (input.text.length > 2) {
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_html($scope1_id, "#text/0", highlight(input.text), void 0, $scope0_owned, 0)}</div>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/code-block.marko", "4:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_html($scope2_id, "#text/0", highlight(input.text), void 0, $scope0_owned, 0)}</span>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/code-block.marko", "7:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_text_length, $sg__input_text_length, void 0, void 0, ["__tests__/tags/code-block.marko_1*shell", "__tests__/tags/code-block.marko_2*shell"], $scope0_owned, 4);
	_global_subscribe("__tests__/tags/code-block.marko_0_input_cursor#3_$global_theme#7/global", $scope0_id);
	$scope0_reason ? _scope($scope0_id, {
		input_cursor: $si__input_text && input.cursor,
		input_text: ($scope0_reason || _source_if($scope0_reason, 1)) && input.text,
		highlight: $si__input_text && highlight
	}, "__tests__/tags/code-block.marko", 0, {
		input_cursor: ["input.cursor"],
		input_text: ["input.text"],
		highlight: "1:8"
	}) : (_filled_guard($scope0_owned, 3) && _client_guard($scope0_owned, 4) && _patch_value($scope0_id, "__tests__/tags/code-block.marko0", input.text), _filled_guard($scope0_owned, 2) && _client_guard($scope0_owned, 4) && _patch_value($scope0_id, "__tests__/tags/code-block.marko1", highlight), _filled_guard($scope0_owned, 2) && _patch_write($scope0_id, "input_cursor", input.cursor));
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 0),
		3: _mask_group($scope0_owned, 0),
		4: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	code_block_default({
		text: input.text,
		cursor: {
			test: /x/g,
			content: _resume(function(h) {
				return h("cursor");
			}, "__tests__/template.marko_0/cursor")
		}
	});
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [code_block_default]);
