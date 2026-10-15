// tags/frame.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 a7 a8;D ;<p class=b> </p>",
	a1: "a1 a10 a11;D ;<p class=a> </p>",
	a: /*@__PURE__*/ (() => `a !a2;${((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template, $template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	frame_default({ content: _content_elide("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p class=a>${_text_resume($scope1_id, "a", input.label + ":0")}</p>`);
		_subscribe($a__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) });
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "b");
	frame_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p class=b>${_text_resume($scope2_id, "a", input.label + ":0")}</p>`);
		_subscribe($b__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cj: $wi__input_label && 1
		})));
	}, $scope0_id) });
	_html(`<button class=a>a</button>${_el_resume($scope0_id, "c")}<button class=b>b</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va4", a, 1);
	_patch_value($scope0_id, "va5", b, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: a,
		i: b,
		j: $wi__input_label && $input_label__closures,
		k: $a__closures,
		a: _existing_scope($childScope),
		l: $b__closures,
		b: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
