// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_expand#6/init;D%b%;<li><!><!></li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let expand = false;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item, void 0, $scope0_owned, 0)}`);
		if ($scope0_reason) _if(() => {
			if (expand) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.note)}</p>`);
				_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, {}, "__tests__/template.marko", "6:8"));
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
		_html("</li>");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_note: input.note,
		expand,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		expand: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
}, 1, 0);
