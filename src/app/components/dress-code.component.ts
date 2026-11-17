import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INVITATION_CONFIG } from '../invitation-config';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center gap-2.5">
      <span class="text-2xl" aria-hidden="true">🤵👗</span>
      <h3 class="text-[11px] font-semibold tracking-[0.25em] text-tinta uppercase">Vestimenta</h3>
      <div class="pildora">
        <span class="block font-serif text-sm font-bold text-tinta sm:text-base">{{ vestimenta.titulo }}</span>
        <span class="block text-xs text-tinta-suave italic sm:text-sm">{{ vestimenta.advertencia }}</span>
      </div>
    </div>
  `,
})
export class DressCodeComponent {
  protected readonly vestimenta = INVITATION_CONFIG.codigoVestimenta;
}
