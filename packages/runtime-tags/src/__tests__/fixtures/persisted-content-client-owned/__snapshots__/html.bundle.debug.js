// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_patch_dynamic_tag($scope0_id, "#text/1", input.content, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let open = input.open;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({
				title: input.title,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _persisted_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "#text/0", input.note)}</em>`);
					_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		input_note: input.note,
		open,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"],
		open: "1:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.note));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
