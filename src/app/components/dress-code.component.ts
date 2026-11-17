import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INVITATION_CONFIG } from '../invitation-config';

@Component({
  selector: 'app-dress-code',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center gap-2.5">
      <div class="flex items-center gap-1.5 text-acento" aria-hidden="true">
        <!-- Moño -->
        <svg viewBox="0 0 24 16" class="h-5 w-5" fill="currentColor">
          <path d="M11 8 L1 2 V14 Z" />
          <path d="M13 8 L23 2 V14 Z" />
          <circle cx="12" cy="8" r="2.4" />
        </svg>
        <!-- Vestido -->
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
          <path d="M9 2 H15 L14 7 L19 22 H5 L10 7 Z" />
          <circle cx="12" cy="3.2" r="1.6" fill="white" />
        </svg>
      </div>
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
