// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template_persisted("b", (input) => {
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
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a3;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D%l"), ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_second__closures = /* @__PURE__ */ new Set();
	const $input_first__closures = /* @__PURE__ */ new Set();
	const $showSecond__closures = /* @__PURE__ */ new Set();
	let showSecond = false;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	frame_default({ content: _content_elide("a2", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", value)}</p>`);
			_scope($scope2_id, {});
		}, 1, "a1");
		_subscribe($showSecond__closures, _subscribe(_source_if($scope0_reason, 1) && $input_first__closures, _subscribe(_source_if($scope0_reason, 0) && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }))));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? _scope($scope0_id, {
		e: input.second,
		f: input.first,
		g: showSecond,
		h: $input_second__closures,
		i: $input_first__closures,
		j: $showSecond__closures,
		a: _existing_scope($childScope)
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.second), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.first));
}, 1, () => [frame_default]);
