import {Course} from "../model/course";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {CourseActions} from "../action-types";

export interface CoursesState extends EntityState<Course>{
  // courses: Course[];
  // entities: {[key: number]: Course},
  // ids: number[]
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded,
    (state, action) => adapter.addMany(action.courses, state))
);

export const {selectAll} = adapter.getSelectors();

