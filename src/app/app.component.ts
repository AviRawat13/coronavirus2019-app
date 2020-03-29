import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoDrawerService } from '@shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'coronavirus2019-app';

  constructor() {}
}
