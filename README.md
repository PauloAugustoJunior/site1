# Nexo — Consultoria

Proposta 1 do site institucional. Angular 22, componentes standalone, estado com signals e estilos SCSS.

```sh
npm ci
npm start
```

Abra http://localhost:4201.

```sh
npm run build
npm test -- --watch=false
```

Build estático em `dist/site1/browser`.

A documentação comparativa, o comportamento do formulário e as instruções de personalização estão em [../README.md](../README.md). O nome Nexo é provisório. Configure o e-mail real em `src/app/ui/contact.config.ts` para habilitar o compartilhamento via cliente de e-mail.
