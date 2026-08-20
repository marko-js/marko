// tags/card/index.marko
const $template = "<section></section>";
_shells({
	b: "b; ;<section></section>",
	b0: "b0; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_patch_attr_class($scope1_id, "a", input.title, $scope0_owned, 3)}>${_patch_text($scope1_id, "b", input.title, $scope0_owned, 3)}${_el_resume($scope1_id, "b")}</h2>${_el_resume($scope1_id, "a")}<p>${_patch_text($scope1_id, "c", input.note, $scope0_owned, 4)}${_el_resume($scope1_id, "c")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"]);
	_html(`</section>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.title,
		f: input.note
	});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 2),
		1: _mask_group($scope0_owned, 0),
		2: _mask_group($scope0_owned, 1),
		4: _mask_group($scope0_owned, 2)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [card_default]);
