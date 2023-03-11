import {compareCourses, Course} from "../model/course";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {CourseActions} from "../action-types";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean
  // courses: Course[];
  // entities: {[key: number]: Course},
  // ids: number[]
};

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId: course => course.id
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addMany(action.courses, {...state, allCoursesLoaded: true}))
);

export const {selectAll} = adapter.getSelectors();

