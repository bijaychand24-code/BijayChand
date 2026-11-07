import { Pool } from 'pg';

let pool: Pool | null = null;

export const getPool = (): Pool | null => pool;

export const connectDB = async (): Promise<void> => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.warn('⚠️ DATABASE_URL is not defined in environment variables. Running server without PostgreSQL connection.');
    return;
  }

  try {
    const newPool = new Pool({
      connectionString,
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    await newPool.query('SELECT 1');

    await newPool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(254) NOT NULL,
        subject VARCHAR(200) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts (created_at DESC);
    `);

    pool = newPool;

    const { rows } = await newPool.query<{ database: string }>('SELECT current_database() AS database');
    console.log(`✅ PostgreSQL Connected: ${rows[0]?.database ?? 'unknown'}`);
  } catch (error) {
    console.error('❌ PostgreSQL Connection Error:', error);
    console.warn('⚠️ Continuing execution without PostgreSQL persistence.');
  }
};
