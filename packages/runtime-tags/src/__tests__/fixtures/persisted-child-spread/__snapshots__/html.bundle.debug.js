// tags/card.marko
const $template$1 = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks$1 = "E lD l D m";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template_persisted("__tests__/tags/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2><p>${_patch_text($scope0_id, "#text/1", input.note, void 0, $scope0_owned, 1)}</p><button class=t>${_text_resume($scope0_id, "#text/3", open ? "hide" : "show")}</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_value($scope0_id, "__tests__/tags/card.marko0", open, 1);
	$scope0_reason && _scope($scope0_id, { open }, "__tests__/tags/card.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b D m`)($walks$1);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}&%b D m`)($walks$1), ((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template$1)),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 3),
		1: _mask_group($scope0_owned, 4)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default(input.props);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 2),
				1: _mask_group($scope0_owned, 2)
			});
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope2);
			card_default({
				title: "fixed",
				...input.more
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button id=c>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_more: input.more,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_more: ["input.more"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
