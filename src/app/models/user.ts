import { GeoLocation } from "./geo-location";

export interface User {
    id?: string; // Identificador único del usuario
    uid?: string; // Identificador único del usuario
    name?: string; // Nombre del usuario
    email?: string; // Correo electrónico
    phone?: string; // Teléfono (opcional)
    whatsapp?: string; // Número de WhatsApp
    rol?: 'user' | 'admin' | 'guest';
    photoURL?: string;
    displayName?: string;
    emailVerified?: boolean;
    // location?: GeoLocation; // Ubicación aproximada del usuario
    // notificationToken?: string; // Token para recibir notificaciones push
}
