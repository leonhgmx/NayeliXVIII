import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INVITATION_CONFIG } from '../invitation-config';

@Component({
  selector: 'app-locations',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center gap-2.5">
      <i class="pi pi-map-marker text-2xl text-acento" aria-hidden="true"></i>
      <h3 class="text-[11px] font-semibold tracking-[0.25em] text-tinta uppercase">Dirección</h3>
      <a [href]="ubicacion.mapsUrl" target="_blank" rel="noopener noreferrer" class="pildora">
        <span class="block font-serif text-sm font-bold text-tinta underline underline-offset-2 sm:text-base">
          Ver ubicación
        </span>
      </a>
    </div>
  `,
})
export class LocationsComponent {
  protected readonly ubicacion = INVITATION_CONFIG.ubicacion;
}
