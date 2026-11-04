// note.marko
var note_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
});

// tags/card.marko
var card_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// template.marko
const $Note_withLoadAssets = withLoadAssets(() => note_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let show = true;
	let T = $Note_withLoadAssets;
	card_default({ content: _content("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b0", $wg__input_label);
	}, $scope0_id) });
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", T, {});
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		g: show,
		h: T,
		i: $wi__input_label && $input_label__closures
	});
}, 1);
