import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { INVITATION_CONFIG } from '../invitation-config';
import { IntroService } from '../services/intro.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <!-- Velo suave del acento sobre el fondo elegido -->
      <div class="absolute inset-0 bg-gradient-to-b from-acento-claro/50 via-transparent to-transparent"></div>

      <div class="relative flex max-w-sm flex-col items-center gap-5">
        <!-- Corona dorada -->
        <svg
          viewBox="0 0 64 48"
          class="h-10 w-10 text-dorado drop-shadow-sm"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M4 18 L16 30 L28 10 L32 6 L36 10 L48 30 L60 18 L54 42 L10 42 Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
            fill="currentColor"
            fill-opacity="0.15"
          />
          <circle cx="4" cy="14" r="4" />
          <circle cx="32" cy="5" r="4.5" />
          <circle cx="60" cy="14" r="4" />
        </svg>

        <p
          class="saludo-intro max-w-xs font-serif text-base tracking-wide text-acento-fuerte sm:text-lg"
          [class.saludo-intro--visible]="intro.abriendo()"
        >
          {{ config.fraseBienvenida }}
        </p>

        <div
          class="nombre-intro flex items-center gap-4 sm:gap-7"
          [class.nombre-intro--visible]="intro.abriendo()"
        >
          <img
            src="assets/img/Butterfly.png"
            alt=""
            aria-hidden="true"
            class="h-10 w-10 shrink-0 -scale-x-100 select-none drop-shadow-sm sm:h-14 sm:w-14"
          />
          <h1 class="font-serif text-7xl leading-none font-bold sm:text-8xl md:text-9xl">
            <span class="text-acento-fuerte">{{ primeraLetra }}</span><span class="text-acento">{{ restoNombre }}</span>
          </h1>
          <img
            src="assets/img/Butterfly.png"
            alt=""
            aria-hidden="true"
            class="h-10 w-10 shrink-0 select-none drop-shadow-sm sm:h-14 sm:w-14"
          />
        </div>

        <p
          class="subtitulo-intro flex items-center gap-2 font-script text-5xl text-acento sm:text-6xl"
          [class.subtitulo-intro--visible]="intro.abriendo()"
        >
          Sweet 18
          <svg viewBox="0 0 64 48" class="h-6 w-6 text-dorado" fill="currentColor" aria-hidden="true">
            <path
              d="M4 18 L16 30 L28 10 L32 6 L36 10 L48 30 L60 18 L54 42 L10 42 Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
              fill="currentColor"
              fill-opacity="0.15"
            />
            <circle cx="4" cy="14" r="4" />
            <circle cx="32" cy="5" r="4.5" />
            <circle cx="60" cy="14" r="4" />
          </svg>
        </p>

        <div
          class="fecha-intro mt-2 grid grid-cols-3 items-start gap-1 sm:gap-6"
          [class.fecha-intro--visible]="intro.abriendo()"
        >
          <div class="flex flex-col items-center gap-1 border-r border-acento-claro pr-2 sm:pr-6">
            <span class="text-[10px] font-medium tracking-[0.25em] text-acento-fuerte uppercase sm:text-xs">
              {{ mesTexto }}
            </span>
          </div>
          <div class="flex flex-col items-center gap-0.5 px-2 sm:px-6">
            <span class="text-[10px] font-medium tracking-[0.3em] text-acento-fuerte uppercase sm:text-xs">
              {{ diaSemanaTexto }}
            </span>
            <span class="font-serif text-5xl font-bold text-tinta tabular-nums sm:text-6xl">
              {{ diaNumero }}
            </span>
            <span class="text-xs text-tinta-suave">{{ anioTexto }}</span>
          </div>
          <div class="flex flex-col items-center gap-1 border-l border-acento-claro pl-2 sm:pl-6">
            <span class="text-sm font-medium tracking-wide text-tinta sm:text-base">{{ horaTexto }}</span>
          </div>
        </div>
      </div>

      <!-- Botón flotante para hacer scroll -->
      <a
        href="#contenido"
        aria-label="Ver la invitación"
        class="absolute bottom-8 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/60 bg-white/50 text-acento shadow-xl shadow-neutro/50 backdrop-blur-md transition-colors duration-300 hover:bg-acento hover:text-white"
      >
        <i class="pi pi-angle-down text-xl" aria-hidden="true"></i>
      </a>
    </section>
  `,
})
export class HeroComponent {
  protected readonly config = INVITATION_CONFIG;
  protected readonly intro = inject(IntroService);

  protected readonly primeraLetra = this.config.nombreFestejada.charAt(0);
  protected readonly restoNombre = this.config.nombreFestejada.slice(1);

  private readonly fecha = INVITATION_CONFIG.fechaEvento;

  protected readonly mesTexto = new Intl.DateTimeFormat('es-MX', { month: 'long' })
    .format(this.fecha)
    .toUpperCase();

  protected readonly diaSemanaTexto = new Intl.DateTimeFormat('es-MX', { weekday: 'long' })
    .format(this.fecha)
    .toUpperCase();

  protected readonly diaNumero = this.fecha.getDate();
  protected readonly anioTexto = this.fecha.getFullYear();

  /** "16:30 PM": hora en formato 24 h seguida del sufijo AM/PM, tal como aparece en la tarjeta original. */
  protected readonly horaTexto = (() => {
    const pad = (n: number) => String(n).padStart(2, '0');
    const horas = this.fecha.getHours();
    const sufijo = horas >= 12 ? 'PM' : 'AM';
    return `${pad(horas)}:${pad(this.fecha.getMinutes())} ${sufijo}`;
  })();
}
