// data.ts
function getTitle(id) {
	return `server title ${id}`;
}
function getRows(id) {
	return id === 1 ? ["one", "two"] : ["three"];
}

// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_part = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.part, {}, 0, 0, $sg__input_part | _persisted_reason(), "__tests__/tags/inner.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_part && writeScope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});
_renderer_shells({
	"__tests__/tags/inner.marko_0_update": ["<section><!></section>", "D%l"],
	"__tests__/tags/inner.marko": ["<section><!></section>", "D%l"]
});

// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<header>");
	_dynamic_tag($scope0_id, "#text/0", input.header, {}, 0, 0, _serialize_guard($scope0_reason, 1) | _persisted_reason(), "__tests__/tags/panel.marko_0/update_dynamic_#text/0");
	_html("</header><main>");
	_dynamic_tag($scope0_id, "#text/1", input.body, {}, 0, 0, _serialize_guard($scope0_reason, 2) | _persisted_reason(), "__tests__/tags/panel.marko_0/update_dynamic_#text/1");
	_html("</main><ul>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item | _persisted_reason(), "__tests__/tags/panel.marko_1/update_dynamic_#text/0");
		_html("</li>");
		$sg__input_item && writeScope($scope1_id, {}, "__tests__/tags/panel.marko", "8:4");
	}, 0, $scope0_id, "#ul/2", $sg__input_item, $sg__input_item, $sg__input_item, "</ul>", 1, "__tests__/tags/panel.marko_1_update");
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});
_renderer_shells({
	"__tests__/tags/panel.marko_1_update": ["<li><!></li>", "D%l"],
	"__tests__/tags/panel.marko_1_content": ["<li><!></li>", "D%l"],
	"__tests__/tags/panel.marko_0_update": ["<header><!></header><main><!></main><ul></ul>", "D%lD%l b"],
	"__tests__/tags/panel.marko": ["<header><!></header><main><!></main><ul></ul>", "D%lD%l b"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_id = _serialize_guard($scope0_reason, 1), $sg__input_id__OR__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_id__OR__input_show,
		2: _serialize_guard($scope0_reason, 2),
		3: $sg__input_id
	});
	let $body;
	let $item;
	if (input.show) {
		$body = attrTag({ content: _content("__tests__/template.marko_2_content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			inner_default({ part: attrTag({ content: _content("__tests__/template.marko_3_content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_escape(getTitle(input.id))}${_el_resume($scope3_id, "#text/0", $sg__input_id)}</p>`);
				$sg__input_id && _subscribe($input_id__closures, writeScope($scope3_id, {
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:input_id": 1
				}, "__tests__/template.marko", "13:10"));
				_resume_branch($scope3_id);
			}) }) });
			$sg__input_id | _persisted_reason() && writeScope($scope2_id, {
				_: $sg__input_id && _scope_with_id($scope0_id),
				"#childScope/0": _persisted_reason() && _existing_scope($childScope)
			}, "__tests__/template.marko", "11:6");
		}) });
	}
	forOf(getRows(input.id), (row) => {
		$item = attrTags($item, {
			value: row,
			content: _content("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html(`${_escape(_hole_value($scope4_id, "PatchHole:#text/0", row, _state_reason()))}${_el_resume($scope4_id, "#text/0")}`);
				writeScope($scope4_id, {}, "__tests__/template.marko", "20:6");
			})
		});
	});
	panel_default({
		body: $body,
		item: $item,
		header: attrTag({ content: _content("__tests__/template.marko_1_content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<h2>${_escape(getTitle(input.id))}${_el_resume($scope1_id, "#text/0", $sg__input_id)}</h2>`);
			$sg__input_id && _subscribe($input_id__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"));
			_resume_branch($scope1_id);
		}) })
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:input_id": $sg__input_id && $input_id__closures,
		"#childScope/2": $sg__input_id__OR__input_show | _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_4_update": [" ", " b"],
	"__tests__/template.marko_4_content": [" ", " b"],
	"__tests__/template.marko_2_update": [[["__tests__/tags/inner.marko"], "<!>"], [
		"/",
		["__tests__/tags/inner.marko"],
		"&%b"
	]],
	"__tests__/template.marko_2_content": [[["__tests__/tags/inner.marko"], "<!>"], [
		"/",
		["__tests__/tags/inner.marko"],
		"&%b"
	]],
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/panel.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/panel.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/panel.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/panel.marko"],
		"&%b"
	]]
});
