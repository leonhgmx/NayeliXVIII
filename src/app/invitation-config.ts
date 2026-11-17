/**
 * Configuración central de la invitación.
 * Todos los datos del evento se editan ÚNICAMENTE en este archivo;
 * ningún componente contiene textos ni datos del evento en duro.
 */

export interface Ubicacion {
  readonly hora: string;
  readonly direccion: string;
  readonly mapsUrl: string;
}

export interface MesaRegalos {
  readonly tienda: string;
  readonly codigo: string;
}

export interface CodigoVestimenta {
  readonly titulo: string;
  readonly advertencia: string;
  /** Color reservado para la festejada. */
  readonly colorReservado: { nombre: string; hex: string };
}

export interface InvitationConfig {
  readonly nombreFestejada: string;
  readonly fraseBienvenida: string;
  readonly fechaEvento: Date;
  /** Lada / código de país para los enlaces de WhatsApp (México = 52). */
  readonly codigoPaisWhatsapp: string;
  readonly whatsappConfirmacion: string;
  readonly mesaRegalos: MesaRegalos;
  readonly ubicacion: Ubicacion;
  readonly codigoVestimenta: CodigoVestimenta;
  /** Ruta servida por la app (src/assets/...) */
  readonly musicaUrl: string;
}

export const INVITATION_CONFIG: InvitationConfig = {
  nombreFestejada: 'Nayeli',
  fraseBienvenida: 'Tenemos el honor de invitarlos a la celebración de',
  fechaEvento: new Date('2026-11-28T16:30:00'),
  codigoPaisWhatsapp: '52',
  whatsappConfirmacion: '5532420009',
  mesaRegalos: {
    tienda: 'Liverpool',
    codigo: '60085650',
  },
  ubicacion: {
    hora: '16:30 hrs',
    direccion: 'Río Satevo 75, Paseos de Churubusco, Iztapalapa, 09030 Ciudad de México, CDMX',
    mapsUrl: 'https://maps.app.goo.gl/QoQsqyrJR5oyVEa48',
  },
  codigoVestimenta: {
    titulo: 'Formal',
    advertencia: 'Se reserva el color rojo',
    colorReservado: { nombre: 'Rojo', hex: '#b91c1c' },
  },
  musicaUrl: 'assets/sounds/BirdsOfFeatherLoop.mp3',
};
