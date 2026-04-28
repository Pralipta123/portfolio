import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experience: Array<{
    company: string;
    role: string;
    period: string;
    highlights: string[];
    tech: string[];
  }> = [
    {
      company: 'Pactap (Simplify Packaging)',
      role: 'Angular Developer',
      period: 'May 2025 — Present',
      highlights: [
        'Engineered a scalable B2B marketplace supporting 3+ user roles (Admin, Vendor, Buyer) with modular architecture.',
        'Delivered 5+ core modules (authentication, product create, cart, order management), enabling end-to-end workflows.',
        'Boosted performance by ~30% using lazy loading, code splitting, and refined change detection strategies.',
        'Strengthened security by ~60% implementing RBAC with JWT-based authentication and role-level access control.'
      ],
      tech: ['Angular','NodeJS.' , 'TypeScript', 'RxJS', 'JWT', 'RBAC', 'REST APIs', 'State management']
    },
    {
      company: 'AGI Brains Private Ltd.',
      role: 'Angular Developer',
      period: 'Mar 2024 — Apr 2025',
      highlights: [
        'Migrated 6+ enterprise modules from JSF to Angular, improving maintainability and scalability.',
        'Reduced load time by ~35% via modular architecture, lazy loading, and efficient rendering strategies.',
        'Enabled multilingual support (i18n) and added WCAG-compliant accessibility improvements.'
      ],
      tech: ['Angular', 'Java', 'RxJs', 'TypeScript', 'i18n', 'WCAG', 'REST APIs']
    },
    {
      company: 'Web Wheel Technologies',
      role: 'Software Developer',
      period: 'May 2023 — Feb 2024',
      highlights: [
        'Developed 15+ modular, reusable Angular components and lazy-loaded routing, reducing future dev time by ~30%.',
        'Improved performance by 20–25% by optimizing routing strategy and component rendering.',
        'Integrated REST APIs using Angular HTTP Client with robust error handling and ~99% response reliability.'
      ],
      tech: ['Angular', 'TypeScript', 'REST APIs', 'HTTP Client', 'Lazy loading']
    }
  ];

  trackByCompany(index: number, item: { company: string }) {
    return item.company;
  }
}
