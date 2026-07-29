// tags/ticker.marko
var ticker_default = _template("__tests__/tags/ticker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_entries = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let marks = 0;
	_html(`<button class=mark>mark <!>${_escape(marks)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ol class=ticker>`);
	_region(() => {
		forOf(input.entries, (entry) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(entry)}${_el_resume($scope1_id, "#text/0", $sg__input_entries)}</li>`);
			$sg__input_entries && writeScope($scope1_id, {}, "__tests__/tags/ticker.marko", "6:4");
		});
	}, $scope0_id, "#ol/2", "__tests__/tags/ticker.marko_r0");
	_html(`</ol>${_el_resume($scope0_id, "#ol/2", $sg__input_entries)}`);
	_script($scope0_id, "__tests__/tags/ticker.marko_0");
	writeScope($scope0_id, { marks: _seed_fill(_state_reason() && marks) }, "__tests__/tags/ticker.marko", 0, { marks: "3:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/ticker.marko_0_update": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"],
	"__tests__/tags/ticker.marko": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"]
});

// tags/ticker2.marko
var ticker2_default = _template("__tests__/tags/ticker2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_entries = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let marks = 0;
	_html(`<button class=mark>mark <!>${_escape(marks)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ol class=ticker>`);
	_region(() => {
		forOf(input.entries, (entry) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(entry)}${_el_resume($scope1_id, "#text/0", $sg__input_entries)}</li>`);
			$sg__input_entries && writeScope($scope1_id, {}, "__tests__/tags/ticker2.marko", "6:4");
		});
	}, $scope0_id, "#ol/2", "__tests__/tags/ticker2.marko_r0");
	_html(`</ol>${_el_resume($scope0_id, "#ol/2", $sg__input_entries)}`);
	_script($scope0_id, "__tests__/tags/ticker2.marko_0");
	writeScope($scope0_id, { marks: _seed_fill(_state_reason() && marks) }, "__tests__/tags/ticker2.marko", 0, { marks: "3:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/ticker2.marko_0_update": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"],
	"__tests__/tags/ticker2.marko": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_view = _serialize_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 3))}</h1>`);
	_dynamic_tag($scope0_id, "#text/3", input.view === "ticker" ? ticker_default : "div", { entries: input.entries }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/3");
	_dynamic_tag($scope0_id, "#text/4", input.view === "ticker" ? ticker2_default : "div", { entries: input.entriesB }, 0, 0, _serialize_guard($scope0_reason, 1) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/4");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_view: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.view,
		input_entries: ($si__input_view || _patch_reason()) && input.entries,
		input_entriesB: ($si__input_view || _patch_reason()) && input.entriesB,
		count: _seed_fill(_state_reason() && count)
	}, "__tests__/template.marko", 0, {
		input_view: ["input.view"],
		input_entries: ["input.entries"],
		input_entriesB: ["input.entriesB"],
		count: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><h1> </h1><!><!><!>", " Db%lD l%b%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><h1> </h1><!><!><!>", " Db%lD l%b%c"]
});
