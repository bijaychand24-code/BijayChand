import { getPool } from '../config/db.js';

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactRecord extends ContactInput {
  id: number;
  createdAt: Date;
}

export const isDbReady = (): boolean => getPool() !== null;

export const createContact = async (input: ContactInput): Promise<ContactRecord | null> => {
  const pool = getPool();
  if (!pool) {
    return null;
  }

  const { rows } = await pool.query<ContactRecord>(
    `INSERT INTO contacts (name, email, subject, message)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, subject, message, created_at AS "createdAt"`,
    [input.name, input.email, input.subject, input.message]
  );

  return rows[0] ?? null;
};
