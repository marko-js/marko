// template.marko
const PEOPLE = [
	"alice",
	"bob",
	"carol"
];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Menu = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope1_reason, 0);
		let open = true;
		_html(`<button>${open ? "collapse" : "expand"}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_for_of(input.item, (entry) => {
					const $scope3_id = _scope_id();
					_dynamic_tag($scope3_id, "#text/0", entry.content, {}, 0, 0, $sg__input_item);
					_serialize_if($scope1_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "7:6");
				}, 0, $scope2_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
				writeScope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/2");
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			input_item: input.item,
			open
		}, "__tests__/template.marko", "3:2", {
			input_item: ["input.item", "3:14"],
			open: "4:8"
		});
		_resume_branch($scope1_id);
	}, $scope0_id) };
	let $item;
	forOf(PEOPLE, (person) => {
		$item = attrTags($item, {
			value: person,
			content: _content_resume_locals("__tests__/template.marko_4*content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`<div>person: <!>${_escape(person)}${_el_resume($scope4_id, "#text/0")}</div>`);
				writeScope($scope4_id, {}, "__tests__/template.marko", "15:6");
			}, { person }, $scope0_id)
		});
	});
	Menu.content({ item: $item });
}, 1);
