import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  menuOpen = false;

  readonly navLinks: ReadonlyArray<{ label: string; href: string }> = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    this.document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
