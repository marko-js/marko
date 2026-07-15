// data.ts
function getTitle(id) {
	return `server title ${id}`;
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 3), $sg__input_id = _serialize_guard($scope0_reason, 5), $sg__input_kind__OR__input_id = _serialize_guard($scope0_reason, 0), $sg__input_kind__OR__input_id__OR__input_tag = _serialize_guard($scope0_reason, 2), $si__input_kind = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Panel = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_title)}</p>`);
		$sg__input_title && _subscribe($input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		_resume_branch($scope1_id);
	}) };
	_html("<div>");
	_if(() => input.kind === "native" ? 0 : input.kind === "dynamic" ? 1 : 2, $scope0_id, "#div/2", $sg__input_kind__OR__input_id | $sg__input_kind__OR__input_id__OR__input_tag, $sg__input_kind__OR__input_id__OR__input_tag, _serialize_guard($scope0_reason, 4), "</div>", void 0, "__tests__/template.marko_0/update_if_#div/2", [
		() => {
			const $scope2_id = _scope_id();
			const title = getTitle(input.id);
			_html(`<h2>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", title, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", $sg__input_id)}</h2>`);
			$sg__input_kind__OR__input_id && writeScope($scope2_id, { _: $sg__input_id && _scope_with_id($scope0_id) }, "__tests__/template.marko", "10:4");
		},
		() => {
			const $scope3_id = _scope_id();
			const $elseif_content__title__closures = new Set();
			const title = getTitle(input.id);
			_dynamic_tag($scope3_id, "#text/0", input.tag, {}, _content_resume("__tests__/template.marko_5_content", () => {
				const $scope5_id = _scope_id();
				const $scope5_reason = _scope_reason();
				_html(`${_escape(_hole_value($scope5_id, "PatchHole:#text/0", title, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", $sg__input_id)}`);
				_subscribe($sg__input_id && $elseif_content__title__closures, writeScope($scope5_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "16:8"));
				_resume_branch($scope5_id);
			}, $scope3_id), 0, _serialize_guard($scope0_reason, 6) | _persisted_reason(), "__tests__/template.marko_3/update_dynamic_#text/0");
			writeScope($scope3_id, {
				title,
				_: _serialize_guard($scope0_reason, 1) && _scope_with_id($scope0_id),
				"ClosureScopes:title": $sg__input_id && $elseif_content__title__closures
			}, "__tests__/template.marko", "14:4", { title: "15:12" });
		},
		() => {
			const $scope4_id = _scope_id();
			const title = getTitle(input.id);
			const $childScope = _peek_scope_id();
			Panel.content({});
			$sg__input_kind__OR__input_id | _persisted_reason() && writeScope($scope4_id, {
				_: $sg__input_id && _scope_with_id($scope0_id),
				"#childScope/0": _persisted_reason() && _existing_scope($childScope)
			}, "__tests__/template.marko", "18:4");
		}
	]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_id: ($si__input_kind || _patch_reason()) && input.id,
		input_tag: ($si__input_kind || _patch_reason()) && input.tag,
		count: _state_reason() && count,
		"ClosureScopes:input_title": $sg__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_id: ["input.id"],
		input_tag: ["input.tag"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
