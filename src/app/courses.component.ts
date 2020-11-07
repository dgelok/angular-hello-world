import { Component } from '@angular/core';
import '@angular/compiler'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <div *ngFor="let course of courses">
                {{ course }}
            </div>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses = ["course1", "course2", "course3"];

    getTitle() {
        return this.title
    }
}