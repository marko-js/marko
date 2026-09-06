// template.marko
const $foo_content__walks = "D l", $foo_content__template = "<em> </em>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let s = 1;
	const foo = { content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.x, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	if ($scope0_reason) _if(() => {
		if (s) {
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			foo.content({});
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		s,
		"ClosureScopes:input_x": $input_x__closures
	}, "__tests__/template.marko", 0, { s: "1:6" }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.x);
}, 1, 1);
