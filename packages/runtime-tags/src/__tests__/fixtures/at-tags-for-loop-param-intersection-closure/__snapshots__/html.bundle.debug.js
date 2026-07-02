// tags/list/index.marko
var list_default = _template("__tests__/tags/list/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && writeScope($scope1_id, {}, "__tests__/tags/list/index.marko", "1:1");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && writeScope($scope0_id, {}, "__tests__/tags/list/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $mult__closures = new Set();
	let mult = 2;
	let $item;
	forOf([
		1,
		2,
		3
	], (item) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(item * mult)}${_el_resume($scope1_id, "#text/0")}`);
			_subscribe($mult__closures, writeScope($scope1_id, {
				item,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:5", { item: "3:7" }));
			_resume_branch($scope1_id);
		}) });
	});
	list_default({ item: $item });
	_html(`<button>Multiplier: <!>${_escape(mult)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		mult,
		"ClosureScopes:mult": $mult__closures
	}, "__tests__/template.marko", 0, { mult: "1:5" });
	_resume_branch($scope0_id);
}, 1);
