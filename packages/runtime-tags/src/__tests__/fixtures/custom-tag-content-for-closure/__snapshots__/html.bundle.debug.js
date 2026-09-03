// tags/menu.marko
var menu_default = _template("__tests__/tags/menu.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	let open = true;
	_html(`<button>${_text_resume($scope0_id, "#text/1", open ? "collapse" : "expand")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.content) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
					_subscribe($si__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/menu.marko", "6:4"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_content, $sg__input_content, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/menu.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/tags/menu.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open,
		"ClosureScopes:input_content": $si__input_content && $input_content__closures
	}, "__tests__/tags/menu.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// template.marko
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	menu_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		forOf(PEOPLE, (person) => {
			const $scope2_id = _scope_id();
			_html(`<div>person: ${_escape(person)}</div>`);
		});
	}, $scope0_id) });
}, 1);
