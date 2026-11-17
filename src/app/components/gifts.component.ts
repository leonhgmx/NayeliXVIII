import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { INVITATION_CONFIG } from '../invitation-config';

@Component({
  selector: 'app-gifts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center gap-2.5">
      <i class="pi pi-gift text-2xl text-acento" aria-hidden="true"></i>
      <h3 class="text-[11px] font-semibold tracking-[0.25em] text-tinta uppercase">Mesa de regalos</h3>
      <button
        type="button"
        (click)="copiarCodigo()"
        aria-label="Copiar número de evento"
        class="pildora cursor-pointer"
      >
        <span class="block font-serif text-sm font-bold tracking-wide text-tinta uppercase sm:text-base">
          {{ regalos.tienda }}
        </span>
        <span class="block text-xs text-tinta-suave italic sm:text-sm">
          Número de evento: {{ regalos.codigo }}
        </span>
      </button>
    </div>
  `,
})
export class GiftsComponent {
  protected readonly regalos = INVITATION_CONFIG.mesaRegalos;
  private readonly messageService = inject(MessageService);

  protected async copiarCodigo(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.regalos.codigo);
      this.messageService.add({
        severity: 'success',
        summary: '¡Código copiado con éxito!',
        detail: `Pégalo en la búsqueda de ${this.regalos.tienda}.`,
        life: 3000,
      });
    } catch {
      this.messageService.add({
        severity: 'warn',
        summary: 'No se pudo copiar',
        detail: `Anota el número de evento: ${this.regalos.codigo}`,
        life: 4000,
      });
    }
  }
}
