# Portfolio ko interviewer ke liye online kaise karein

## Important
Interviewer ko `npm.cmd install` ya `npm.cmd run dev` chalane ki zaroorat nahi hoti. Ye commands sirf developer ke local computer par development/testing ke liye hain. Interviewer ko aapka deployed public URL dena hota hai.

## Static deployment (Netlify / Vercel)
1. Is portfolio folder ko GitHub repository mein upload/push karein.
2. Netlify ya Vercel mein repository import karein.
3. Build command: `npm run build`
4. Publish/output directory: `dist`
5. Deploy hone ke baad jo public URL mile, wahi interviewer ko bhejein.

Games, Tree Visualizer aur Job Application Form `public/` ke andar hain, isliye Vite build ke waqt ye `dist/` mein copy ho jayenge.

## Tic Tac Toe online multiplayer
Tic Tac Toe ka AI aur local 2-player mode static hosting par chal sakta hai. Online multiplayer ke liye original Node.js server ko alag se deploy karna aur game mein server URL configure karna hoga. Is package mein original game code ko badle bina preserve kiya gaya hai; online server deployment included nahi hai.

## Local testing (sirf aapke computer par)
Pehli baar dependencies install karne ke liye `npm.cmd install`, phir `npm.cmd run dev`. Baad mein same local project ke liye dobara install ki zaroorat nahi hoti jab tak dependencies badlein.
