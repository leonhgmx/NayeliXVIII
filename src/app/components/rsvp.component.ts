import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INVITATION_CONFIG } from '../invitation-config';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center justify-end gap-2.5">
      <i class="pi pi-phone text-2xl text-acento" aria-hidden="true"></i>
      <a [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" class="pildora">
        <span class="block font-serif text-sm font-bold text-tinta underline underline-offset-2 sm:text-base">
          Confirmar asistencia
        </span>
      </a>
    </div>
  `,
})
export class RsvpComponent {
  private readonly config = INVITATION_CONFIG;

  protected readonly whatsappUrl = (() => {
    const mensaje = `¡Hola! Confirmo mi asistencia a los *XVIII Años de ${this.config.nombreFestejada}*.\n*Nombre:*`;
    return `https://wa.me/${this.config.codigoPaisWhatsapp}${this.config.whatsappConfirmacion}?text=${encodeURIComponent(mensaje)}`;
  })();
}
