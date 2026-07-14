// data.ts
function getTitle(id) {
	return `server title ${id}`;
}
function getRows(id) {
	return id === 1 ? ["one", "two"] : ["three"];
}

// tags/inner.marko
var inner_default = _template("b", (input) => {
	const $sg__input_part = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.part, {}, 0, 0, $sg__input_part | _persisted_reason(), "b0");
	_html("</section>");
	$sg__input_part && writeScope($scope0_id, {});
});

// tags/panel.marko
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<header>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 0, 0, _serialize_guard($scope0_reason, 1) | _persisted_reason(), "c0");
	_html("</header><main>");
	_dynamic_tag($scope0_id, "b", input.body, {}, 0, 0, _serialize_guard($scope0_reason, 2) | _persisted_reason(), "c1");
	_html("</main><ul>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item | _persisted_reason(), "c3");
		_html("</li>");
		$sg__input_item && writeScope($scope1_id, {});
	}, 0, $scope0_id, "c", $sg__input_item, $sg__input_item, $sg__input_item, "</ul>", 1, "c2");
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 1), $sg__input_id__OR__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_id__OR__input_show,
		2: _serialize_guard($scope0_reason, 2),
		3: $sg__input_id
	});
	let $body;
	let $item;
	if (input.show) $body = attrTag({ content: _content("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id();
		inner_default({ part: attrTag({ content: _content("a4", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(_hole_value($scope3_id, "Qa", getTitle(input.id), _persisted_reason()))}${_el_resume($scope3_id, "a", $sg__input_id)}</p>`);
			$sg__input_id && _subscribe($input_id__closures, writeScope($scope3_id, {
				_: _scope_with_id($scope2_id),
				Ck: 1
			}));
			_resume_branch($scope3_id);
		}) }) });
		$sg__input_id | _persisted_reason() && writeScope($scope2_id, {
			_: $sg__input_id && _scope_with_id($scope0_id),
			a: _persisted_reason() && _existing_scope($childScope)
		});
	}) });
	forOf(getRows(input.id), (row) => {
		$item = attrTags($item, {
			value: row,
			content: _content("a5", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`${_escape(row)}${_el_resume($scope4_id, "a")}`);
				writeScope($scope4_id, {});
			})
		});
	});
	panel_default({
		body: $body,
		item: $item,
		header: attrTag({ content: _content("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<h2>${_escape(_hole_value($scope1_id, "Qa", getTitle(input.id), _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_id)}</h2>`);
			$sg__input_id && _subscribe($input_id__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}) })
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		h: _state_reason() && count,
		k: $sg__input_id && $input_id__closures,
		c: $sg__input_id__OR__input_show | _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
