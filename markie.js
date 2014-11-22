var app = angular.module('markie', []);

app.directive('markdown', function() {
    var converter = new Markdown.Converter();

    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {

            if (attrs.markdown) {
                scope.$watch(String(attrs.markdown), function(str){
                    element.html(converter.makeHtml( String(str).trim()));
                });

            } else {
                element.html(converter.makeHtml(element.text().trim()));
            }
        }
    };
});
