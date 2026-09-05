// tags/wrap/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,<div id=done>done</div>",
	a1: "a1,<div id=done>done</div>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a5;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)("D%l"), ((_w0) => `<button> </button>${_w0}`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope);
	wrap_default({ content: _content_elide("a3", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", _content_resume("a2", () => {
			const $scope3_id = _scope_id();
			_persisted_reason();
			_await($scope3_id, "a", input.promise, () => {
				_scope_id();
				_html("<div id=done>done</div>");
			}, 1, "a1");
			$scope0_reason && _subscribe($input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }));
			$scope0_reason && _resume_branch($scope3_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_html(`<em>loading ${_text_resume($scope2_id, "a", input.msg, 2)}</em>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_script($scope0_id, "a5");
	$scope0_reason ? _scope($scope0_id, {
		f: input.msg,
		h: count,
		i: $input_msg__closures,
		j: $input_promise__closures,
		c: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.msg);
}, 1, () => [wrap_default]);
