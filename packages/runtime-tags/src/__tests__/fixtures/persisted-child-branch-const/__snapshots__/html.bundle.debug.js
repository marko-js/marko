// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_patch_attr_class($scope1_id, "#h2/0", input.title, $scope0_owned, 3)}>${_patch_text($scope1_id, "#text/1", input.title, $scope0_owned, 3)}${_el_resume($scope1_id, "#text/1")}</h2>${_el_resume($scope1_id, "#h2/0")}<p>${_patch_text($scope1_id, "#text/2", input.note, $scope0_owned, 4)}${_el_resume($scope1_id, "#text/2")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/card/index.marko_1*shell"]);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_title: input.title,
		input_note: input.note
	}, "__tests__/tags/card/index.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"]
	});
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
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
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [card_default]);
