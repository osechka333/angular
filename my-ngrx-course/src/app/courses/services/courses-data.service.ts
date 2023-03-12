import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course>{
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
      super('Course', http, httpUrlGenerator);
    }

}
