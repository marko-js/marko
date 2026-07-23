// data.js
const getServerProduct = typeof window === "undefined" ? (id) => ({
	id,
	title: `Product ${id}`
}) : undefined;

// tags/shared-list.marko
const subsByKey = {};
var shared_list_default = _template("__tests__/tags/shared-list.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = $global().data[input.name];
	const $return = value;
	_script($scope0_id, "__tests__/tags/shared-list.marko_0_input_name");
	writeScope($scope0_id, {
		input_name: input.name,
		value: _state_reason() && value,
		"#TagVariableChange": _state_reason() && (_resume(function(next) {
			$global().data[input.name] = next;
			subsByKey[input.name]?.forEach((cb) => cb());
		}, "__tests__/tags/shared-list.marko_0/valueChange", $scope0_id) || void 0)
	}, "__tests__/tags/shared-list.marko", 0, {
		input_name: ["input.name"],
		value: "5:6"
	});
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"__tests__/tags/shared-list.marko_0_update": ["", ""],
	"__tests__/tags/shared-list.marko": ["", ""]
});

// tags/add-form.marko
var add_form_default = _template("__tests__/tags/add-form.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let cart = shared_list_default({ name: "cart" });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/add-form.marko_0_cart/var");
	const productId = input.productId;
	let watched = false;
	let quantity = 1;
	_html(`<button class=watch>${_escape(_hole_value($scope0_id, "PatchHole:#text/4", watched ? "watching" : "watch", _state_reason()))}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}<form class=add><input type=hidden name=productId${_attr("value", productId)} class=pid>${_el_resume($scope0_id, "#input/6", _serialize_guard($scope0_reason, 0))}<input${_attr_input_value($scope0_id, "#input/7", quantity, _resume((_new_quantity) => {
		quantity = Number(_new_quantity);
	}, "__tests__/tags/add-form.marko_0/valueChange", $scope0_id))} type=number name=quantity min=1 class=qty>${_el_resume($scope0_id, "#input/7")}<button type=button class=plus>+</button>${_el_resume($scope0_id, "#button/8")}</form>${_el_resume($scope0_id, "#form/5")}`);
	_script($scope0_id, "__tests__/tags/add-form.marko_0");
	writeScope($scope0_id, {
		cart: _state_reason() && cart,
		productId,
		watched: _state_reason() && watched,
		quantity: _state_reason() && quantity,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/add-form.marko", 0, {
		cart: "1:14",
		productId: "2:8",
		watched: "3:6",
		quantity: "4:6"
	});
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/add-form.marko_0_update": [[["__tests__/tags/shared-list.marko"], "<!><button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>"], [
		"0",
		["__tests__/tags/shared-list.marko"],
		"&%b D l D b b l"
	]],
	"__tests__/tags/add-form.marko": [[["__tests__/tags/shared-list.marko"], "<!><button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>"], [
		"0",
		["__tests__/tags/shared-list.marko"],
		"&%b D l D b b l"
	]]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_productId = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_productId__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Item = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const product = getServerProduct?.(input.productId);
		_html(`<section class=item><h2 class=title>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", product.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_productId)}</h2>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason($sg__input_productId);
		add_form_default({ productId: product.id });
		_html("</section>");
		$sg__input_productId | _persisted_reason() && _subscribe($sg__input_productId && $input_productId__closures, writeScope($scope1_id, {
			_: $sg__input_productId && _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "9:2"));
		_resume_branch($scope1_id);
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "item" ? Item : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:input_productId": $sg__input_productId && $input_productId__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": [[
		"<section class=item><h2 class=title> </h2>",
		["__tests__/tags/add-form.marko"],
		"<!></section>"
	], [
		"E l/",
		["__tests__/tags/add-form.marko"],
		"&%l"
	]],
	"__tests__/template.marko_1_content": [[
		"<section class=item><h2 class=title> </h2>",
		["__tests__/tags/add-form.marko"],
		"<!></section>"
	], [
		"E l/",
		["__tests__/tags/add-form.marko"],
		"&%l"
	]],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
