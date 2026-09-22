import { siteConfig } from "./config";

/**
 * Builds a WhatsApp click-to-chat URL using the standard wa.me format,
 * with the message correctly URL-encoded.
 */
export function getWhatsAppLink(
  message: string = siteConfig.whatsappDefaultMessage
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function getConsultationWhatsAppLink(): string {
  return getWhatsAppLink(siteConfig.whatsappConsultationMessage);
}

export function getServiceWhatsAppLink(serviceName: string): string {
  return getWhatsAppLink(
    `Hello Infinite Solutions, I would like to know more about your ${serviceName} services.`
  );
}
