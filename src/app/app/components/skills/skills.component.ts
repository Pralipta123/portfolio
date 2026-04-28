import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillGroups: Array<{ title: string; items: string[] }> = [
    {
      title: 'Frontend',
      items: [
        'Angular 16+',
        'TypeScript',
        'JavaScript (ES6+)',
        'RxJS',
        'NgRx',
        'HTML5',
        'CSS3 / SCSS',
        'Bootstrap',
        'Angular Material',
        'Responsive UI',
        'Accessibility (WCAG)'
      ]
    },
    {
      title: 'Backend / APIs',
      items: ['Node.js', 'RESTful APIs', 'JWT Authentication', 'RBAC', 'Swagger', 'Postman', 'Error handling']
    },
    {
      title: 'Tools / DevOps',
      items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Angular CLI', 'NPM', 'Docker', 'Jenkins', 'Kafka']
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'SQL']
    },
    {
      title: 'Practices',
      items: ['Performance optimization', 'Debugging', 'CI/CD', 'Agile', 'Scrum', 'Modular architecture', 'Lazy loading']
    }
  ];

  trackByFn(index: number, item: string) {
    return item;
  }
}