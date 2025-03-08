/**
 * Declaración de módulo para AOS (Animate On Scroll)
 * Esto elimina el error de TypeScript relacionado con la falta de tipos para AOS
 */

declare module 'aos' {
    interface AosOptions {
      /** Configuración de duración de la animación (en ms) */
      duration?: number;
      /** Tipo de timing function para las animaciones */
      easing?: string;
      /** Retraso antes de que la animación comience (en ms) */
      delay?: number;
      /** Si las animaciones deben dispararse solo una vez */
      once?: boolean;
      /** Si las animaciones deben activarse solo al desplazarse hacia abajo */
      mirror?: boolean;
      /** El elemento al que se adjunta el observador de desplazamiento */ 
      startEvent?: string;
      /** Desplazamiento (en px) desde el punto de activación original */
      offset?: number;
      /** Desplazamiento de animación personalizado para móviles */
      anchorPlacement?: string;
      /** Valor para deshabilitar animaciones por debajo de viewport width */
      disable?: boolean | string | ((params: any) => boolean);
      /** Valor personalizado para el throttling */
      throttleDelay?: number;
      /** Valor personalizado para el debounce */
      debounceDelay?: number;
    }
  
    interface Aos {
      /** Inicializa AOS con opciones personalizadas */
      init(options?: AosOptions): void;
      /** Actualiza el estado y posición de todas las instancias */
      refresh(): void;
      /** Actualiza posición de los elementos */
      refreshHard(): void;
    }
  
    const aos: Aos;
    export default aos;
  }