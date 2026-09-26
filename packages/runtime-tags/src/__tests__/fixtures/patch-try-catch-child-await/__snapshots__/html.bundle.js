// tags/loader.marko
const $template = "<div class=ld><!></div>";
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<em> </em>",
	b: "b;D%;<div class=ld><!></div>"
});
var loader_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", v, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, 1, "b0", 1);
	_html("</div>");
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template),
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		loader_default({ promise: input.promise });
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard($scope0_reason, 0) && "a2");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a1", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1, () => [loader_default]);
