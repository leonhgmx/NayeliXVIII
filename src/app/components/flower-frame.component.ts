import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Marco floral fijo (arriba y abajo), sin reaccionar al scroll. */
@Component({
  selector: 'app-flower-frame',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      src="assets/img/FondoSuperiorBlanco.png"
      alt=""
      aria-hidden="true"
      class="pointer-events-none fixed inset-x-0 top-0 z-30 max-h-[28.8svh] w-full select-none object-cover object-top [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
    />
    <img
      src="assets/img/FondoInferiorBlanco.png"
      alt=""
      aria-hidden="true"
      class="pointer-events-none fixed inset-x-0 bottom-0 z-30 max-h-[28.8svh] w-full select-none object-cover object-bottom [mask-image:linear-gradient(to_top,black_65%,transparent)]"
    />
  `,
})
export class FlowerFrameComponent {}
