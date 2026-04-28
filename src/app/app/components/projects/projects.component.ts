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
      subtitle: 'B2B marketplace platform with RBAC and role-based dashboards.',
      bullets: [
        'Architected multi-tenant platform supporting RBAC and role-based dashboards for 1,000+ concurrent users.',
        'Engineered end-to-end order lifecycle, reducing order processing errors by ~20% via automated workflows.',
        'Optimized performance and scalability by ~25–30% using RxJS for reactive data handling and modular architecture.'
      ],
      tags: ['Angular', 'TypeScript', 'RxJS', 'RBAC', 'JWT', 'REST APIs'],
      link: 'https://pactap.com/'
    },
    {
      title: 'JSF → Angular Migration',
      subtitle: 'Enterprise migration system for a Qatar-based eCustoms platform.',
      bullets: [
        'Migrated 6+ legacy JSF modules to Angular, enabling ~40% faster feature development across modules.',
        'Designed 20+ reusable components standardizing UI patterns and reducing redundant code by ~30%.',
        'Improved bilingual support (English & Arabic), increasing engagement by ~25% across international user groups.'
      ],
      tags: ['Angular', 'TypeScript', 'i18n', 'WCAG', 'Migration', 'REST APIs'],
      link: 'https://www.ecustoms.gov.qa/qccswui/#/home'
    }
  ];

  trackByTitle(index: number, item: { title: string }) {
    return item.title;
  }
}
