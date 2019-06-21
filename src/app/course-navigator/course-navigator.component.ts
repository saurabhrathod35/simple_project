import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/CourseNavigatorServiceClient';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }

  courses
  selectedCourse = {
    modules: []
  };
  selectedModule = {
    lessons: []
  };

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectModule(module: any) {
    this.selectedModule = module;
  }
}
