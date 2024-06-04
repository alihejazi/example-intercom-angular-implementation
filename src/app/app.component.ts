import {Component} from '@angular/core';

import Intercom from '@intercom/messenger-js-sdk';

const user = {
  id: '123',
  name: 'John Doe',
  email: 'jdoe@test123.com',
  createdAt: Date.now()
}

Intercom({
  app_id: 'INSERT_YOUR_APP_ID_HERE',
  user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
});

@Component({
  selector: 'app-root',
  template: `
    Welcome to Angular!
  `,
  standalone: true,
})
export class AppComponent {}
