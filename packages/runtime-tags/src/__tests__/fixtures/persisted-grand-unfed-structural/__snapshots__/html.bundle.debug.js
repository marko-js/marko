// tags/badge/index.marko
const $template$2 = "<!><!><p> </p>";
const $walks$2 = "b%bD l";
_shells({
	"__tests__/tags/badge/index.marko": "__tests__/tags/badge/index.marko;b%bD ;<!><!><p> </p>",
	"__tests__/tags/badge/index.marko_1*shell": "__tests__/tags/badge/index.marko_1*shell,<em>on</em>"
});
var badge_default = _template_persisted("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_open = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			$scope0_reason && _scope($scope1_id, {}, "__tests__/tags/badge/index.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"]);
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.text, void 0, $scope0_owned, 1)}</p>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
}, 0, 0);

// tags/wrap/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div class=wrap>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2);
_shells({ "__tests__/tags/wrap/index.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/wrap/index.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)($walks$2), ((_w0) => `<div class=wrap>${_w0}</div>`)($template$2)) });
var wrap_default = _template_persisted("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=wrap>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	badge_default({ text: input.label });
	_html("</div>");
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap/index.marko", 0);
}, 0, () => [badge_default]);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			wrap_default({ label: input.a });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_a: input.a,
		show
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.a);
	_resume_branch($scope0_id);
}, 1, () => [wrap_default]);
