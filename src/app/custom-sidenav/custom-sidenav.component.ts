import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

export type MenuItem = {
  label: string;
  route: string;
  icon: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss'],
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  // Inject the Router service
  constructor(private router: Router) {}

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '', // Keep 'Home' for now
    },
    {
      icon: 'contacts',
      label: 'Contact',
      route: 'Contact',
    },
    {
      icon: 'info',
      label: 'About',
      route: 'About',
    },
    {
      icon: 'work',
      label: 'Project',
      route: 'Project', 
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  
}
