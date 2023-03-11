import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions} from "./action-types";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem("user", JSON.stringify(action["user"]))
        )
      ), {dispatch: false} // to avoid the infinite loop
  );

  logout$ = createEffect(() =>
  this.actions$
    .pipe(
      ofType(AuthActions.logout),
      tap(action => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      })
    ),{dispatch: false}
  )

  constructor(private actions$: Actions,
              private router: Router) { // to get notified of the action

  }
}

// const login$ = createEffect(() =>
    //   this.actions$
    //     .pipe(
    //       ofType(AuthActions.login),
    //       tap(action => {
    //         localStorage.setItem("user", JSON.stringify(action["user"]))
    //       })
    //     )
    // )
    //const login$ = this.actions$.pipe(ofType(AuthActions.login),tap(action => {
    //       localStorage.setItem("user", JSON.stringify(action["user"]))
    //     })
    //   );
    // login$.subscribe();
    // actions$.subscribe(action => { // manual subscribe for all actions
    //   if(action.type == '[Login Page] User Login') {
    //     localStorage.setItem("user", JSON.stringify(action["user"]))
    //   }
    // });
