// template.marko
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Menu = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope1_reason, 0);
		let open = true;
		_html(`<button>collapse${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_for_of(input.item, (entry) => {
					const $scope3_id = _scope_id();
					_dynamic_tag($scope3_id, "a", entry.content, {}, 0, 0, $sg__input_item);
					_serialize_if($scope1_reason, 0) && writeScope($scope3_id, {});
				}, 0, $scope2_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "c");
		_script($scope1_id, "a1");
		writeScope($scope1_id, {
			f: input.item,
			g: open
		});
		_resume_branch($scope1_id);
	}, $scope0_id) };
	let $item;
	forOf(PEOPLE, (person) => {
		$item = attrTags($item, {
			value: person,
			content: _content_resume_locals("a2", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<div>person: <!>${_escape(person)}${_el_resume($scope4_id, "a")}</div>`);
				writeScope($scope4_id, {});
			}, { 2: person }, $scope0_id)
		});
	});
	Menu.content({ item: $item });
}, 1);
