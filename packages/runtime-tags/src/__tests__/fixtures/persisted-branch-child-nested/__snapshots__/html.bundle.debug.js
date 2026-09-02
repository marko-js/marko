// tags/badge.marko
const $template$2 = "<b class=badge>[<!>]</b>";
const $walks$2 = "Db%l";
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko;Db%;<b class=badge>[<!>]</b>" });
var badge_default = _template_persisted("__tests__/tags/badge.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>[${_patch_text($scope0_id, "#text/0", input.label, 2, $scope0_owned, 0)}]</b>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
}, 0, 0);

// tags/card.marko
const $template$1 = "<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>";
const $walks$1 = "E l b%l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;E l b%;<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>" });
var card_default = _template_persisted("__tests__/tags/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<section class=card><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2><button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			badge_default({ label: input.title });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/card.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card.marko1", open, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_title: ["input.title"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/card.marko0", input.title);
	_resume_branch($scope0_id);
}, 0, () => [badge_default]);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			card_default({ title: input.title });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { input_title: input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1, () => [card_default]);
