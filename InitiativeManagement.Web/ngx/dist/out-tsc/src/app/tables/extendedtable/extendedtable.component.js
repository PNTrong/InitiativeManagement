"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExtendedTableComponent = (function () {
    function ExtendedTableComponent() {
        this.state_plain = true;
    }
    ExtendedTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', ''],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', 'Name', 'Job Position', 'Salary', 'Active'],
            dataRows: [
                { id: 1, name: 'Andrew Mike', job_position: 'Develop', salary: '99,225', active: false },
                { id: 2, name: 'John Doe', job_position: 'Design', salary: '89,241', active: false },
                { id: 3, name: 'Alex Mike', job_position: 'Design', salary: '92,144', active: true },
                { id: 4, name: 'Mike Monday', job_position: 'Marketing', salary: '49,990', active: true }
            ]
        };
        this.tableData3 = {
            headerRow: ['Thumb', 'Blog Title', 'Description', 'Date', 'Views', ''],
            dataRows: [
                ['blog-1.jpg', '10 Things that all designers do', 'Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.', '30/08/2016', '1,225', ''],
                ['blog-2.jpg', 'Back to School Offer', 'Design is not just what it looks like and feels like. Design is how it works.', '17/07/2016', '49,302', ''],
                ['blog-3.jpg', 'First Dribbble Meetup in Romania', 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.', '23/06/2016', '1,799', ''],
                ['blog-4.jpg', 'How we created our startup with 0$', 'A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...', '30/08/2016', '23,030', ''],
                ['blog-1.jpg', 'To use or not to use Bootstrap', 'The Office Chair adapts naturally to virtually every body and is a permanent fixture.', '10/05/2016', '13,763', '']
            ]
        };
    };
    ExtendedTableComponent.prototype.ngAfterViewInit = function () {
        // Init Tooltips
        $('[rel="tooltip"]').tooltip();
        $('.switch-plain').bootstrapSwitch({
            onColor: '',
            onText: '',
            offText: ''
        });
    };
    return ExtendedTableComponent;
}());
ExtendedTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'extended-table-cmp',
        templateUrl: 'extendedtable.component.html'
    })
], ExtendedTableComponent);
exports.ExtendedTableComponent = ExtendedTableComponent;
//# sourceMappingURL=extendedtable.component.js.map