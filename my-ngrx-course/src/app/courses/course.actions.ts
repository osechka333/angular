import {createAction, props} from "@ngrx/store";
import {Course} from "./model/course";

export const loadAllCourses = createAction( // get courses from the backend
  "[Courses Resolver] Load All Courses"
);

export const allCoursesLoaded = createAction( // store courses in store
  "[Load Courses Effect] All Courses Loaded",
  props<{courses: Course[]}>() // payload will contain these props
);
