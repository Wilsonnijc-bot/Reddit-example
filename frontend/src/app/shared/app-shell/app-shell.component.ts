import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hf-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent {

  @Input() selectedDomain = 'all';
  @Input() sidebarReloadToken = 0;
  @Output() domainSelected = new EventEmitter<string>();
}
