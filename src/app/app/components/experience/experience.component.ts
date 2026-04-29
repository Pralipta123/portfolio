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
      role: 'Frontend Engineer',
      period: 'May 2025 — Present',
      highlights: [
        'Built a modular B2B marketplace for 3+ roles (Admin, Vendor, Buyer) with clear boundaries between shared shell and role-specific features.',
        'Delivered 5+ product areas (auth, catalog, cart, orders, and supporting flows), aligning Angular clients with Node.js REST services and QA sign-off.',
        'Improved load and navigation UX with lazy routes, code splitting, and pragmatic change-detection tuning on data-heavy screens.',
        'Implemented JWT-backed RBAC with route guards and permission-aware components so users only see actions allowed for their role.'
      ],
      tech: ['Angular', 'Node.js', 'TypeScript', 'RxJS', 'JWT', 'RBAC', 'REST APIs', 'State management']
    },
    {
      company: 'AGI Brains Private Ltd.',
      role: 'Frontend Engineer',
      period: 'Mar 2024 — Apr 2025',
      highlights: [
        'Migrated 6 enterprise JSF modules to Angular—20+ reusable components—reducing duplicate UI and speeding up feature work.',
        'Cut time-to-interactive on heavy screens using feature modules, lazy loading, and predictable HTTP + RxJS data flows.',
        'Shipped English / Arabic i18n and WCAG-oriented improvements for a government-facing customs platform.'
      ],
      tech: ['Angular', 'Java', 'RxJS', 'TypeScript', 'i18n', 'WCAG', 'REST APIs']
    },
    {
      company: 'Web Wheel Technologies',
      role: 'Frontend Engineer',
      period: 'May 2023 — Feb 2024',
      highlights: [
        'Owned 15+ reusable Angular components and lazy-loaded route trees, cutting repeat UI work for new internal screens.',
        'Integrated HttpClient with Node.js and other REST backends, with centralized error handling and loading or empty states.',
        'Tuned routing and rendering so filter- and table-heavy views stayed responsive as datasets grew.'
      ],
      tech: ['Angular', 'Node.js', 'TypeScript', 'REST APIs', 'HTTP Client', 'Lazy loading']
    }
  ];

  trackByCompany(index: number, item: { company: string }) {
    return item.company;
  }
}
