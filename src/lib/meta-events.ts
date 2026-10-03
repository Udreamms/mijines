// Utilidad para enviar eventos al Píxel de Meta (cliente).

const generateEventId = () => {
  return 'event_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

export const sendMetaEvent = async (eventName: string, eventData: any = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData, { eventID: generateEventId() });
  }
};
