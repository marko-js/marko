// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D%l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	frame_default({ content: _content_elide("a0", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ":0")}</p>`);
		_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: count,
		g: $input_label__closures,
		h: $count__closures,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [frame_default]);
