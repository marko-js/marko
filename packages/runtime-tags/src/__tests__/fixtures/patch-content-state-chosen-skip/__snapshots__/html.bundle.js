// template.marko
let contentRenders = 0;
function rendering() {
	contentRenders++;
	return "";
}
function takeRenders() {
	const renders = contentRenders;
	contentRenders = 0;
	return renders;
}
_shells({ a: "a !a6; b b b ;<button>toggle</button><section></section><section></section><section id=partial></section>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0), $sg__input_b = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_resume($scope1_id, "a", input.b, $wg__input_b * 2)}${_escape(rendering())}</em>`);
		_subscribe($wi__input_b && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_b);
		$wg__input_b || _resume_branch($scope1_id);
	}, $scope0_id) };
	const two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_resume($scope2_id, "a", input.b, $wg__input_b * 2)}${_escape(rendering())}</strong>`);
		_subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cn: $wi__input_b && 1
		}), "a3", $wg__input_b);
		$wg__input_b || _resume_branch($scope2_id);
	}, $scope0_id) };
	_html("<section>");
	_attr_content("b", $scope0_id, two, 0);
	_html(`</section>${_el_resume($scope0_id, "b")}<section`);
	_attrs_content({
		class: input.b,
		content: two
	}, "c", $scope0_id, "section", 1);
	_html(`</section>${_el_resume($scope0_id, "c")}<section id=partial`);
	_attrs_partial_content({
		class: input.b,
		content: two
	}, { id: 1 }, "d", $scope0_id, "section", 2);
	const status = `${input.b}: ${takeRenders()} content renders`;
	_html(`</section>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	_script($scope0_id, "a6");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "ha4" : "ea4", "m");
	_scope($scope0_id, {
		g: input.b,
		h: mode,
		i: one,
		j: two,
		m: status,
		n: $wi__input_b && $input_b__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.b, !$sg__input_b), _content_withhold(input.b), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xm", status, !$sg__input_b));
}, 1);
