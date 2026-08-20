// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<p class=b> </p>",
	a1: "a1;D ;<p class=a> </p>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a2;${_w0};${_w1}`)(((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l"), ((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template, $template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_label = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	frame_default({ content: _content_elide("a1", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<p class=a>${_escape(input.label + ":0")}${_el_resume($scope1_id, "a")}</p>`);
		_subscribe($a__closures, _subscribe($si__input_label && $input_label__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	frame_default({ content: _content_elide("a0", () => {
		_persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<p class=b>${_escape(input.label + ":0")}${_el_resume($scope2_id, "a")}</p>`);
		_subscribe($b__closures, _subscribe($si__input_label && $input_label__closures, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cj: 1
		})));
		_resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button class=a>a</button>${_el_resume($scope0_id, "c")}<button class=b>b</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.label,
		h: a,
		i: b,
		j: $input_label__closures,
		k: $a__closures,
		a: _existing_scope($childScope),
		l: $b__closures,
		b: _existing_scope($childScope2)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
	_resume_branch($scope0_id);
}, 1, () => [frame_default]);
