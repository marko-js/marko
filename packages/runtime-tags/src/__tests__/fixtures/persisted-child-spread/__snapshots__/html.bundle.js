// tags/card.marko
const $template = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks = "E lD l D m";
_shells({ b: "b !b0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2><p>${_patch_text($scope0_id, "b", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "b")}</p><button class=t>show${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", open, 1);
	$scope0_reason && writeScope($scope0_id, { i: open });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%b D m`)($walks), ((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template)),
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 3),
		1: _mask_group($scope0_owned, 4)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default(input.props);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 2),
				1: _mask_group($scope0_owned, 2)
			});
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope2);
			card_default({
				title: "fixed",
				...input.more
			});
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`<button id=c>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && writeScope($scope0_id, {
		i: input.more,
		j: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
