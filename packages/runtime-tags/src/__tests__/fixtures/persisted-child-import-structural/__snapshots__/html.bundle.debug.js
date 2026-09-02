// helper.ts
let structuralOpen = false;

// tags/badge/index.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
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
	}, $scope0_id, "#text/0", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"], $scope0_owned, 0);
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.text, void 0, $scope0_owned, 1)}</p>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/badge/index.marko", 0);
}, 0, 0);

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
			badge_default({
				open: false,
				text: input.a
			});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_a: input.a,
		show
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		show: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.a);
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
