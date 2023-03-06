RESOURCE:
1) https://www.youtube.com/watch?v=n8e9dBDzTzw 
2) https://github.com/MaksymGrom/ngrx-by-an-hour

STEPS TO START THE APPLICATION:
1) npm install -g @angular/cli
2) ng new my-app
3) start the app: ng serve --open
4) add ngrx storage: npm install @ngrx/store --save --> ng add @ngrx/store@latest --save
5) ng add @ngrx/store --> ng add @ngrx/store@latest --no-minimal
6) install ngrx dev tools: ng add @ngrx/store-devtools@latest
7) install ngrx effects: ng add @ngrx/effects
8) install ngrx router store: ng add @ngrx/router-store

HOW TO START WITH CREATING COUNTER:
1) Add buttons to the app.component.html
2) Add functions to the app.component.ts


// not working @effect module - it's not updating the date 