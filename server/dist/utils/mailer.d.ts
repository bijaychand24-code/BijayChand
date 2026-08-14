export interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export declare const sendContactEmail: (data: EmailData) => Promise<boolean>;
//# sourceMappingURL=mailer.d.ts.map