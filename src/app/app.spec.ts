import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Jornada de soluções', () => {
  it('permite explorar um serviço sem abrir um formulário', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const options = element.querySelectorAll<HTMLButtonElement>('.journey-options button');
    options[2].click();
    await fixture.whenStable();
    expect(element.querySelector('.journey-detail h3')?.textContent).toContain(
      'Seus dados contam uma história',
    );
    expect(options[2].getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('dialog')?.open).toBe(false);
  });
});
