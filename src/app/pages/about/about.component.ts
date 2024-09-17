import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips'; // Import MatChipsModule for skills section
import { CommonModule } from '@angular/common'; 
import { TimelineModule } from 'primeng/timeline';
import { FormsModule } from '@angular/forms';

interface EventItem {
  Board?: string;
  Place?: string;
  percentage?: string;
  icon?: string;
  color?: string;
  image?: string;
  date?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    TimelineModule,
    FormsModule // Add MatChipsModule to imports
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { Board: 'SSC', Place: 'Public Enlish High School',percentage:'50%', icon: 'pi pi-shopping-cart', color: '#9C27B0',date:'2018' },
          { Board: 'HSC', Place: 'Uttar Bhartiya Sang Jr College',percentage:'71%', icon: 'pi pi-cog', color: '#673AB7',date:'2020' },
          { Board: 'Graduation', Place: 'Chetana College Bandra(East)',percentage:'8.3 C.G.P.A', icon: 'pi pi-shopping-cart', color: '#FF9800',date: '2024'},
          // { Board: 'Delivered', Place: '16/10/2020 10:00',percentage:'', icon: 'pi pi-check', color: '#607D8B' }
      ];
  }
  FrontEndskills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Angular', level: 60 },
    { name: 'React', level: 50 },
    { name: 'Bootstrap', level: 90 }
  ];
  BackEndskills = [
    { name: 'Java', level: 80 },
    { name: 'C-Sharp', level: 90 },
    { name: 'JavaScript', level: 60 },
    { name: 'PHP', level: 75 }
  ];
  Databaseskills = [
    { name: 'SQL', level: 90 },
    { name: 'PhpMyAdmin', level: 60 },
    { name: 'Oracle', level: 60 },
    { name: 'MongoDB', level: 75 }
  ];
  
}
