import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import apiRoutes from './routes/api.js';
import { scheduleDailyNewsRefresh } from './lib/news-feed.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '../client/dist');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 100 }));
app.use('/api', apiRoutes);
app.use(express.static(dist));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
  res.sendFile(path.join(dist, 'index.html'), (err) => err && next());
});
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: 'Server error' }); });
app.listen(PORT, () => {
  console.log('API listening on http://localhost:' + PORT);
  scheduleDailyNewsRefresh();
});
