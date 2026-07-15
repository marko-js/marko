// data.ts
function getTitle(id) {
	return `server title ${id}`;
}

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 3), $sg__input_id = _serialize_guard($scope0_reason, 5), $sg__input_kind__OR__input_id = _serialize_guard($scope0_reason, 0), $sg__input_kind__OR__input_id__OR__input_tag = _serialize_guard($scope0_reason, 2), $si__input_kind = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Panel = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_escape(_hole_value($scope1_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_title)}</p>`);
		$sg__input_title && _subscribe($input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) };
	_html("<div>");
	_if(() => input.kind === "native" ? 0 : input.kind === "dynamic" ? 1 : 2, $scope0_id, "c", $sg__input_kind__OR__input_id | $sg__input_kind__OR__input_id__OR__input_tag, $sg__input_kind__OR__input_id__OR__input_tag, _serialize_guard($scope0_reason, 4), "</div>", void 0, "a1", [
		() => {
			const $scope2_id = _scope_id();
			_html(`<h2>${_escape(_hole_value($scope2_id, "Qa", getTitle(input.id), _persisted_reason()))}${_el_resume($scope2_id, "a", $sg__input_id)}</h2>`);
			$sg__input_kind__OR__input_id && writeScope($scope2_id, { _: $sg__input_id && _scope_with_id($scope0_id) });
		},
		() => {
			const $scope3_id = _scope_id();
			const $elseif_content__title__closures = /* @__PURE__ */ new Set();
			const title = getTitle(input.id);
			_dynamic_tag($scope3_id, "a", input.tag, {}, _content_resume("a5", () => {
				const $scope5_id = _scope_id();
				_scope_reason();
				_html(`${_escape(_hole_value($scope5_id, "Qa", title, _persisted_reason()))}${_el_resume($scope5_id, "a", $sg__input_id)}`);
				_subscribe($sg__input_id && $elseif_content__title__closures, writeScope($scope5_id, { _: _scope_with_id($scope3_id) }));
				_resume_branch($scope5_id);
			}, $scope3_id), 0, _serialize_guard($scope0_reason, 6) | _persisted_reason(), "a4");
			writeScope($scope3_id, {
				b: title,
				_: _serialize_guard($scope0_reason, 1) && _scope_with_id($scope0_id),
				c: $sg__input_id && $elseif_content__title__closures
			});
		},
		() => {
			const $scope4_id = _scope_id();
			getTitle(input.id);
			const $childScope = _peek_scope_id();
			Panel.content({});
			$sg__input_kind__OR__input_id | _persisted_reason() && writeScope($scope4_id, {
				_: $sg__input_id && _scope_with_id($scope0_id),
				a: _persisted_reason() && _existing_scope($childScope)
			});
		}
	]);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		h: ($si__input_kind || _patch_reason()) && input.id,
		i: ($si__input_kind || _patch_reason()) && input.tag,
		j: _state_reason() && count,
		k: $sg__input_title && $input_title__closures
	});
	_resume_branch($scope0_id);
}, 1);
