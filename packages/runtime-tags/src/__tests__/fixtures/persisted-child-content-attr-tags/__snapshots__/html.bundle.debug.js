// tags/panel/index.marko
const $template$1 = "<div class=panel><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/panel/index.marko": "__tests__/tags/panel/index.marko;D%;<div class=panel><!></div>" });
var panel_default = _template_persisted("__tests__/tags/panel/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_header = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=panel>");
	const $tag = input.header;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_header, 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/panel/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<h1>hi <!></h1>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			panel_default({ header: attrTag({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<h1>hi ${_text_resume($scope2_id, "#text/0", input.title, 2)}</h1>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"));
			}, $scope1_id) }) });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		open,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		open: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, () => [panel_default]);
