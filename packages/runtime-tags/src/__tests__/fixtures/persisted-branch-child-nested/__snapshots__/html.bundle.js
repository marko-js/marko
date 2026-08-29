// tags/badge.marko
_shells({ b: "b;Db%;<b class=badge>[<!>]</b>" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>[${_patch_text($scope0_id, "a", input.label, 2, $scope0_owned, 0)}]</b>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// tags/card.marko
const $template = "<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>";
const $walks = "E l b%l";
_shells({ c: "c !c0;E l b%;<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>" });
var card_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<section class=card><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2><button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	if ($scope0_reason) _if(() => {}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c1", open, 1);
	$scope0_reason ? _scope($scope0_id, {
		f: input.title,
		g: open
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "c0", input.title);
	_resume_branch($scope0_id);
}, 0, () => [badge_default]);

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			card_default({ title: input.title });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { e: input.title });
}, 1, () => [card_default]);
