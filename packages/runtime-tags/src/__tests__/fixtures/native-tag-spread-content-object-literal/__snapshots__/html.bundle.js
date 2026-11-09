// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_title__OR__input_which = _write_if($scope0_reason, 0), $wg__input_which = _write_guard($scope0_reason, 2), $wi__input_which = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const One = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "a", input.title, $wg__input_title * 2)}</em>`);
		$wi__input_title__OR__input_which && _subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_title);
	}, $scope0_id) };
	const Two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "a", input.title, $wg__input_title * 2)}</strong>`);
		$wi__input_title__OR__input_which && _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cm: $wi__input_title && 1
		}), "a3", $wg__input_title);
	}, $scope0_id) };
	_html("<div data-kind=pick>");
	_attr_content("a", $scope0_id, input.which ? One : Two, $wg__input_which);
	_html(`</div>${_el_mark($scope0_id, "a", $wg__input_which)}<b`);
	_attrs_content({ [input.key]: "computed" }, "b", $scope0_id, "b");
	_html(`</b>${_el_mark($scope0_id, "b")}<s`);
	_attrs_content({
		__proto__: null,
		id: "proto"
	}, "c", $scope0_id, "s");
	_html(`</s>${_el_mark($scope0_id, "c")}<em`);
	_attrs_content({ get id() {
		return "getter";
	} }, "d", $scope0_id, "em");
	_html(`</em>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		g: $wi__input_which && input.title,
		j: $wi__input_which && One,
		k: $wi__input_which && Two,
		m: $wi__input_title && $input_title__closures
	});
}, 1);
