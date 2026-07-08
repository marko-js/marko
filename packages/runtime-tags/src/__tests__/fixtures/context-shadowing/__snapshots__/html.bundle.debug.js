// counter.js
let n = 0;
function next() {
	return "p" + ++n;
}

// provider.marko
var provider_default = _template("__tests__/provider.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_context_provide("__tests__/provider.marko", next(), () => {
		_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	});
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/provider.marko", 0);
});

// consumer.marko
var consumer_default = _template("__tests__/consumer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const label = _context_get("__tests__/provider.marko", "./provider.marko");
	_html(`<li>${_escape(label)}${_el_resume($scope0_id, "#text/0")}</li>`);
	writeScope($scope0_id, {}, "__tests__/consumer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	provider_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		consumer_default({});
		provider_default({ content: _content("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			consumer_default({});
		}) });
		consumer_default({});
	}) });
	forOf([
		"x",
		"y",
		"z"
	], (item) => {
		const $scope3_id = _scope_id();
		provider_default({ content: _content("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			consumer_default({});
		}) });
	});
}, 1);
