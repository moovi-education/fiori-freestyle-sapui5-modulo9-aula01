sap.ui.define([
    "moovi/m09a01/controller/BaseController",
    "sap/m/MessageToast",
    "sap/m/MessageBox"    
], function (Controller, MessageToast, MessageBox) {
    "use strict";
    return Controller.extend("moovi.m09a01.controller.CompanyDetail", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteCompanyDetail").attachMatched(this.onRouteMatched, this);

        },

        onRouteMatched: function (oEvent) {
            var oArgs, oView;
            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

          
                oView.bindElement({
                    path: "/ScarrSet('" + oArgs.carrId + "')",
                    events: {
                        change: this._onBindingChange.bind(this),
                        dataRequested: function (oEvent) {
                            oView.setBusy(true);
                        },
                        dataReceived: function (oEvent) {
                            oView.setBusy(false);
                        }
                    }
                });          

        },
        _onBindingChange: function (oEvent) {
            // No data for the binding
            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("TargetNotFound");
            }

        }


    });
});