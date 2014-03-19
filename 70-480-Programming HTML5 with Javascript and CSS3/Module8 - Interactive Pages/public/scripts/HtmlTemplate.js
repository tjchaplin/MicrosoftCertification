/// <reference path="_namespace.js" />
/// <reference path="Object.inherit.js" />

(function () {

    conference.HtmlTemplate = Object.inherit({
        
        initialize: function(templateId) {
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = this.getTemplateHtml(templateId);
            this.templateElement = this.findTemplateElementInDiv(tempDiv);
        },

        createElement: function (data) {
            var element = this.templateElement.cloneNode(true);
            this.dataBindElement(element, data);
            return element;
        },

        getTemplateHtml: function (templateId) {
            return document.getElementById(templateId).textContent;
        },

        findTemplateElementInDiv: function (div) {
            var templateElement = div.firstChild;
            var ELEMENT_NODE = 1;
            while (templateElement && templateElement.nodeType !== ELEMENT_NODE) {
                templateElement = templateElement.nextSibling;
            }
            return templateElement;
        },

        dataBindElement: function (element, data) {
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    var value = data[property];
                    var elementToBind = element.querySelector("[data-bind=" + property + "]");
                    if (elementToBind) {
                        elementToBind.textContent = value.toString();
                    }
                }
            }
        }
        
    });

} ());