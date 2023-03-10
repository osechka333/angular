import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AuthState} from "./auth/reducers";
import {isLoggedIn, isLoggedOut} from "./auth/auth.selectors";
import {logout} from "./auth/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = false;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private router: Router,
                private store: Store<AuthState>) {

    }

    ngOnInit() {

      this.router.events.subscribe(event  => {});
      this.isLoggedIn$ = this.store
        .pipe(
          // map(state => !!state["auth"].user) // first approach with no memory
          select(isLoggedIn)
        );
      this.isLoggedOut$ = this.store.pipe(
        //map(state => !state["auth"].user) // the first approach with no memory
        select(isLoggedOut)
      );
     // this.store.subscribe(state => console.log('store value', state));
        // switch (true) {
        //   case event instanceof NavigationStart: {
        //     this.loading = true;
        //     break;
        //   }
        //
        //   case event instanceof NavigationEnd:
        //   case event instanceof NavigationCancel:
        //   case event instanceof NavigationError: {
        //     this.loading = false;
        //     break;
        //   }
        //   default: {
        //     break;
        //   }
        // }
      //});

    }

    logout() {
      this.store.dispatch(logout());

    }

}
