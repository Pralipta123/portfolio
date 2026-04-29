import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects: Array<{
    title: string;
    subtitle: string;
    bullets: string[];
    tags: string[];
    link?: string;
  }> = [
    {
      title: 'B2B Packaging Marketplace',
      subtitle: 'Angular SPA on a Node.js REST stack with RBAC and role-specific dashboards.',
      bullets: [
        'Multi-role B2B UI (Admin, Vendor, Buyer) with RBAC-aware navigation and dashboards backed by Node.js APIs.',
        'Order lifecycle screens wired to REST contracts, with validation, optimistic feedback, and fewer manual correction loops.',
        'RxJS-driven state and modular Angular structure for cart, catalog, and order flows under real usage.'
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'RBAC', 'JWT', 'REST APIs'],
      link: 'https://pactap.com/'
    },
    {
      title: 'JSF → Angular Migration',
      subtitle: '6-module Angular front end for a Qatar eCustoms platform (Java REST services).',
      bullets: [
        'Replaced six JSF modules with Angular and 20+ shared components so new screens reused patterns instead of one-off JSP.',
        'Feature modules and lazy loading to keep the SPA maintainable as scope grew across customs workflows.',
        'English / Arabic i18n, RTL-aware layout, and WCAG-oriented patterns for international operators.'
      ],
      tags: ['Angular', 'TypeScript', 'Java', 'i18n', 'WCAG', 'Migration', 'REST APIs'],
      link: 'https://www.ecustoms.gov.qa/qccswui/#/home'
    }
  ];

  trackByTitle(index: number, item: { title: string }) {
    return item.title;
  }
}
