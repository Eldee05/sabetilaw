import { randomUUID } from 'node:crypto';
import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../storage');
const file = path.join(dir, 'submissions.jsonl');

// Simple file storage for development. Replace with a database in production.
export async function saveSubmission(data) {
  const record = { id: randomUUID(), createdAt: new Date().toISOString(), ...data };
  await mkdir(dir, { recursive: true });
  await appendFile(file, JSON.stringify(record) + '\n');
  return record.id;
}
