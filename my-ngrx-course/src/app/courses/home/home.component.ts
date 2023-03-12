import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from "rxjs";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import {CoursesEntityService} from "../services/course-entity.service";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;
    loading$: Observable<boolean>; //added

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;


    constructor(
      private dialog: MatDialog,
      //private store: Store<AppState>
      // private coursesHttpService: CoursesHttpService
      private coursesService: CoursesEntityService) {

    }

    ngOnInit() {
      this.reload();
    }

  reload() {
      // this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));
      // this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));
      // this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

    this.beginnerCourses$ = this.coursesService.entities$
      .pipe(
        map(courses => courses.filter(course => course.category == 'BEGINNER'))
      );

    this.advancedCourses$ = this.coursesService.entities$
      .pipe(
        map(courses => courses.filter(course => course.category == 'ADVANCED'))
      );

    this.promoTotal$ = this.coursesService.entities$
        .pipe(
            map(courses => courses.filter(course => course.promo).length)
        );


    // const courses$ = this.coursesHttpService.findAllCourses()
    //   .pipe(
    //     map(courses => courses.sort(compareCourses)),
    //     shareReplay()
    //   );
    //
    // this.loading$ = courses$.pipe(map(courses => !!courses));
    //
    // this.beginnerCourses$ = courses$
    //   .pipe(
    //     map(courses => courses.filter(course => course.category == 'BEGINNER'))
    //   );
    //
    //
    // this.advancedCourses$ = courses$
    //   .pipe(
    //     map(courses => courses.filter(course => course.category == 'ADVANCED'))
    //   );
    //
    // this.promoTotal$ = courses$
    //     .pipe(
    //         map(courses => courses.filter(course => course.promo).length)
    //     );

  }

  onAddCourse() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);

  }
}
