# Deploy na Vercel — Clínica Dr. José Ronaldo

Este projeto é uma landing page estática (TanStack Start / Vite + React). Pode ser publicado diretamente na Vercel.

## 1. Subir o código no GitHub

No editor da Lovable, clique em **GitHub → Connect to GitHub** e crie o repositório.
Ou, se já tem o repo local:

```bash
git remote add origin git@github.com:SEU_USUARIO/clinica-dr-jose-ronaldo.git
git push -u origin main
```

## 2. Importar na Vercel

1. Acesse https://vercel.com/new
2. Selecione o repositório criado
3. Em **Framework Preset** escolha **Other** (já vem configurado pelo `vercel.json`)
4. Clique em **Deploy**

As configurações já estão definidas no `vercel.json`:

| Campo | Valor |
|---|---|
| Build Command | `vite build && cp -r dist/server dist/client/_server` |
| Install Command | `bun install` |
| Output Directory | `dist/client` (para assets estáticos) |
| Funções Serverless | `_server/index.js` (Edge Runtime) |
| Rewrites | `/ (.*)` para `/_server/index.js` |
| Node Version | 20.x (padrão Vercel) |

## 3. Domínio personalizado

Em **Project → Settings → Domains** adicione seu domínio (ex: `clinicadrjoseronaldo.com.br`) e configure o DNS conforme instruído pela Vercel (CNAME para `cname.vercel-dns.com`).

## 4. Variáveis de ambiente

Atualmente o site não usa variáveis de ambiente. Caso adicione integrações no futuro (ex: formulário, analytics), defina-as em **Project → Settings → Environment Variables**.

## Observações

- O build gera assets otimizados (HTML/CSS/JS minificados, imagens com hash).
- Caching agressivo de `/assets/*` configurado via `vercel.json`.
- Rotas SPA tratadas via rewrite para `_server/index.js`.
- Caso queira manter também o deploy automático da Lovable, basta clicar em **Publish** no editor — os dois deploys podem coexistir.
