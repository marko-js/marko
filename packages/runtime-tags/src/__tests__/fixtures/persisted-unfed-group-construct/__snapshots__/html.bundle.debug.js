// tags/kid.marko
const $template$1 = "<div> </div><!><button>t</button>";
const $walks$1 = "D l%b b";
_shells({ "__tests__/tags/kid.marko": "__tests__/tags/kid.marko !__tests__/tags/kid.marko_0;D l%b ;<div> </div><!><button>t</button>" });
var kid_default = _template_persisted("__tests__/tags/kid.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<div>${_patch_text($scope0_id, "#text/0", input.a, void 0, $scope0_owned, 0)}</div>`);
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.b)}</p>`);
			_scope($scope1_id, {}, "__tests__/tags/kid.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/kid.marko_0");
	_patch_value($scope0_id, "__tests__/tags/kid.marko1", on, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_b: input.b,
		on
	}, "__tests__/tags/kid.marko", 0, {
		input_b: ["input.b"],
		on: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/kid.marko0", input.b);
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			kid_default({
				a: input.a,
				b: "const"
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1, () => [kid_default]);
