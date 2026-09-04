// tags/wrap/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,<em>loading</em>",
	a1: "a1;D%;<div id=done><!> done</div>",
	a2: "a2;D%;<div id=done><!> done</div>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
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
	wrap_default({ content: _content_elide("a4", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", _content_resume("a3", () => {
			const $scope2_id = _scope_id();
			_persisted_reason();
			_await($scope2_id, "a", input.promise, () => {
				const $scope3_id = _scope_id();
				_html(`<div id=done>${_patch_text($scope3_id, "a", input.msg, void 0, $scope0_owned, 2)} done</div>`);
				_scope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, 1, "a2");
			$scope0_reason && _subscribe(_source_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$scope0_reason && _resume_branch($scope2_id);
		}, $scope1_id), { placeholder: attrTag({ content: _content_record("a0", $scope1_id) }) });
		$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_script($scope0_id, "a5");
	$scope0_reason && _scope($scope0_id, {
		g: input.msg,
		h: count,
		j: $input_msg__closures,
		i: $input_promise__closures,
		c: _existing_scope($childScope)
	});
}, 1, () => [wrap_default]);
