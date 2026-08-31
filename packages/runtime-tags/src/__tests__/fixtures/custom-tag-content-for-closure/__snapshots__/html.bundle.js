// tags/menu.marko
var menu_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html(`<button>${_text_resume($scope0_id, "b", "collapse")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.content) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $sg__input_content);
					_subscribe($si__input_content && $input_content__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "a", $sg__input_content, $sg__input_content, $sg__input_content);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		f: input.content,
		g: open,
		h: $si__input_content && $input_content__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
var template_default = _template("a", (input) => {
	_scope_reason();
	menu_default({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		forOf(PEOPLE, (person) => {
			_scope_id();
			_html(`<div>person: ${_escape(person)}</div>`);
		});
	}, _scope_id()) });
}, 1);
