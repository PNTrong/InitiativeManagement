"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var lbd_chart_component_1 = require("./lbd-chart/lbd-chart.component");
var lbd_task_list_component_1 = require("./lbd-task-list/lbd-task-list.component");
var lbd_table_component_1 = require("./lbd-table/lbd-table.component");
var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType = exports.NavItemType || (exports.NavItemType = {}));
var LbdModule = (function () {
    function LbdModule() {
    }
    return LbdModule;
}());
LbdModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule
        ],
        declarations: [
            lbd_table_component_1.LbdTableComponent,
            lbd_chart_component_1.LbdChartComponent,
            lbd_task_list_component_1.LbdTaskListComponent
        ],
        exports: [
            lbd_table_component_1.LbdTableComponent,
            lbd_chart_component_1.LbdChartComponent,
            lbd_task_list_component_1.LbdTaskListComponent
        ]
    })
], LbdModule);
exports.LbdModule = LbdModule;
//# sourceMappingURL=lbd.module.js.map