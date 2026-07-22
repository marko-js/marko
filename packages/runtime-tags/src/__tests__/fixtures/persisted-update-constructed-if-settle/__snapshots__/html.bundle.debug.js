// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 2), $sg__input_title__OR__input_missing = _serialize_guard($scope0_reason, 0), $sg__input_missing = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", $sg__input_title)}</h1><button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => input.missing ? 0 : 1, $scope0_id, "#text/3", $sg__input_title__OR__input_missing | $sg__input_missing, $sg__input_title__OR__input_missing, $sg__input_missing, void 0, void 0, "__tests__/template.marko_0/update_if_#text/3", [() => {
		const $scope6_id = _scope_id();
		_html("<p>gone</p>");
		$sg__input_missing && writeScope($scope6_id, {}, "__tests__/template.marko", "6:2");
	}, () => {
		const $scope1_id = _scope_id();
		_if(() => input.title.length ? 0 : 1, $scope1_id, "#text/0", $sg__input_title, $sg__input_title, _serialize_guard($scope0_reason, 4), void 0, void 0, "__tests__/template.marko_1/update_if_#text/0", [() => {
			const $scope2_id = _scope_id();
			_html(` 5> <h2>long ${_sep($sg__input_title)}${_escape(input.title)}${_el_resume($scope2_id, "#text/0", $sg__input_title)}</h2>`);
			$sg__input_title__OR__input_missing && _subscribe($sg__input_title && $input_title__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "10:4"));
		}, () => {
			const $scope3_id = _scope_id();
			_html(`<h2>short ${_sep($sg__input_title)}${_escape(input.title)}${_el_resume($scope3_id, "#text/0", $sg__input_title)}</h2>`);
			$sg__input_title__OR__input_missing && _subscribe($sg__input_title && $input_title__closures, writeScope($scope3_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_title": $sg__input_title && 1
			}, "__tests__/template.marko", "13:4"));
		}], [0, 0]);
		_html("<section>");
		_try($scope1_id, "#text/1", _content_resume("__tests__/template.marko_4_content", () => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_await($scope4_id, "#text/0", resolveAfter(0, 1), () => {
				const $scope5_id = _scope_id();
				$sg__input_title__OR__input_missing && _script($scope5_id, "__tests__/template.marko_5_input_title/pending");
				_html(`<p>extras for ${_sep($sg__input_title)}${_escape(_hole_value($scope5_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope5_id, "#text/0", $sg__input_title)}</p>`);
				$sg__input_title__OR__input_missing && writeScope($scope5_id, {
					_: _scope_with_id($scope4_id),
					"ClosureSignalIndex:input_title": $sg__input_title && 2
				}, "__tests__/template.marko", "19:8");
				_resume_branch($scope5_id);
			}, $sg__input_title__OR__input_missing, "__tests__/template.marko_5_update");
			$sg__input_title__OR__input_missing && writeScope($scope4_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "17:6");
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_7_content", () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_html("loading extras…");
		}, $scope1_id) }) }, "__tests__/template.marko_1/update_boundary_#text/1", "__tests__/template.marko_4_update");
		_html("</section>");
		$sg__input_title__OR__input_missing && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
	}], ["__tests__/template.marko_6_update", "__tests__/template.marko_1_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_title: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.title,
		input_title_length: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.title?.length,
		count: _state_reason() && count,
		"ClosureScopes:input_title": $sg__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_title_length: ["input.title.length"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_6_update": ["<p>gone</p>", "b"],
	"__tests__/template.marko_6_content": ["<p>gone</p>", "b"],
	"__tests__/template.marko_5_update": ["<p>extras for <!></p>", "Db%l"],
	"__tests__/template.marko_5_content": ["<p>extras for <!></p>", "Db%l"],
	"__tests__/template.marko_4_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_4_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_1_update": ["<!><!><section><!></section>", "b%bD%l"],
	"__tests__/template.marko_1_content": ["<!><!><section><!></section>", "b%bD%l"],
	"__tests__/template.marko_0_update": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"],
	"__tests__/template.marko": ["<h1> </h1><button>clicked <!></button><!><!>", "D l Db%l%c"]
});
