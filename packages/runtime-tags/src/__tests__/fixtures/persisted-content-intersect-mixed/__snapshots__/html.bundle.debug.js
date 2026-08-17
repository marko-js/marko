// tags/box/index.marko
const $template$1 = "<div class=box><!></div>";
const $walks$1 = "D%l";
var box_default = _template_persisted("__tests__/tags/box/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<div class=box>");
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), "__tests__/tags/box/index.marko0");
	_html$1("</div>");
	$scope0_reason ? writeScope($scope0_id, {}, "__tests__/tags/box/index.marko", 0) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/box/index.marko0", input.content);
}, 0, 0);

// template.marko
const $template = "<main><!><button class=toggle>+</button><button class=bump> </button></main>";
const $walks = "D%b b D m";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $count__closures = new Set();
	let open = false;
	let count = 0;
	_html$1("<main>");
	if ($scope0_reason) _if$1(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			box_default({ content: _content$1("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html$1(`<p>${_escape(count + ":" + input.a)}${_el_resume($scope2_id, "#text/0")}</p>`);
				_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 0) && $input_a__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6")));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html$1(`<button class=toggle>+</button>${_el_resume($scope0_id, "#button/1")}<button class=bump>${_escape(count)}${_el_resume($scope0_id, "#text/3")}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_a: input.a,
		open,
		count,
		"ClosureScopes:input_a": $input_a__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		open: "1:6",
		count: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.a);
	_resume_branch($scope0_id);
}, 1, () => [box_default]);
