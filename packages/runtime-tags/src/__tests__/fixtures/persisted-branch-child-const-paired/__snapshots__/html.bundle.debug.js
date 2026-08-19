// tags/card/index.marko
const $template$1 = "<section><h2> </h2></section>";
const $walks$1 = "D D m";
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2${_patch_attr_class($scope0_id, "#h2/0", input.title, $scope0_owned, 0)}>${_patch_text($scope0_id, "#text/1", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/1")}</h2>${_el_resume($scope0_id, "#h2/0")}</section>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
_shells({ "__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1), /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({ title: "root" });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope2);
			card_default({ title: "branch" });
			_html(`<p>${_patch_text($scope1_id, "#text/1", input.note, $scope0_owned, 2)}${_el_resume($scope1_id, "#text/1")}</p>`);
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_note: input.note,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1, () => [card_default]);
