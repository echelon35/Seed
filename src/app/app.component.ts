import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Fil d\'actualité', url: '/folder/feed', icon: 'newspaper' },
    { title: 'Alertes planifiées', url: '/folder/alerts', icon: 'alarm' },
    { title: 'Journal de bord', url: '/folder/diary', icon: 'pencil' },
    { title: 'Ma boîte à graines', url: '/folder/seedbox', icon: 'albums' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
