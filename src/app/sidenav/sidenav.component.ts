import { Component, computed, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from "../custom-sidenav/custom-sidenav.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterOutlet,
    CustomSidenavComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  collapsed = signal(false);
  isSmallScreen = signal(false);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    // Subscribe to screen size changes
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreen.set(result.matches); // Set the signal based on screen size
        this.updateSidenavClass(); // Update class based on screen size
      });
  }

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  // Method to toggle the sidenav open/closed
  toggleSidenav() {
    this.collapsed.set(!this.collapsed());
    this.updateSidenavClass(); // Update class when toggling
  }

  // Method to update class based on sidenav state
  private updateSidenavClass() {
    const container = this.el.nativeElement.querySelector('.mat-sidenav-container');
    if (container) {
      if (this.collapsed() && this.isSmallScreen()) {
        this.renderer.addClass(container, 'sidenav-open');
      } else {
        this.renderer.removeClass(container, 'sidenav-open');
      }
    }
  }
}
