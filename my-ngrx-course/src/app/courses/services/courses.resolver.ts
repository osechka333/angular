import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CoursesEntityService} from "./course-entity.service";
import {filter, first, tap} from "rxjs/operators";

@Injectable()
export class CoursesResolverNew implements Resolve<boolean> {
  constructor(private coursesService: CoursesEntityService) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> {
    return this.coursesService.loaded$.pipe(
      tap(loaded => {
        if(!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter(loaded => !!loaded), //wait for data to be loaded
      first()
    );
    // return this.coursesService.getAll()
    //   .pipe(map(courses => !!courses))

  }
}
