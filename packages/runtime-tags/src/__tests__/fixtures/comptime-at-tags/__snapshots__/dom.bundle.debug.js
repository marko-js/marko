// tags/my-tabs/index.marko
const $template$1 = "<div class=tabs></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $for_content__tab_title = ($scope, tab_title) => _text($scope["#text/0"], tab_title);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__tab_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => {
	$for_content__tab_title($scope, $params2[0]?.title);
	$for_content__tab_content($scope, $params2[0]?.content);
};
const $for = /*@__PURE__*/ _for_of("#div/0", "<h2> </h2><div><!></div>", "D lD%l", 0, $for_content__$params);
const $input_tab = ($scope, input_tab) => $for($scope, [input_tab]);
const $input = ($scope, input) => $input_tab($scope, input.tab);
var my_tabs_default = /*@__PURE__*/ _template("__tests__/tags/my-tabs/index.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $tab_content3 = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<p>5 &lt; 6 &amp;&amp; \"quotes\" > 'ticks'</p>", "b");
const $tab_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p>npm start</p>", "b");
const $tab_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p>npm install marko</p>", "b");
function $setup($scope) {
	$input_tab($scope["#childScope/0"], attrTags(attrTags(attrTag({
		title: "Install",
		content: $tab_content($scope)
	}), {
		title: "Run",
		content: $tab_content2($scope)
	}), {
		title: "Escape & sons",
		content: $tab_content3($scope)
	}));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
