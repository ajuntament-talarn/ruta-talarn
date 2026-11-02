# Ruta Urbana de Talarn — Els Secrets de Pedra

Web interactiva de la ruta geològica urbana de Talarn. Onze parades, onze pedres, una frase secreta.

Projecte de l'**Ajuntament de Talarn** en col·laboració amb el **Geoparc Mundial UNESCO Orígens**.

🌐 **Web:** https://ajuntament-talarn.github.io/ruta-urbana/

---

## Descripció

*Els Secrets de Pedra de Talarn* és un joc de descoberta geològica per fer a peu pel nucli urbà de Talarn. A cada parada, un codi QR porta el visitant a una pregunta sobre el patrimoni geològic i cultural del lloc. Responent les onze preguntes s'obté una frase secreta.

La web inclou també els **panells interpretatius** físics instal·lats a les parades, amb els textos complets en castellà, anglès i francès.

## Contingut

| Fitxer | Descripció |
|---|---|
| `index.html` | Aplicació web completa (joc + panells) |
| `textos.js` | Textos del joc en català, castellà, anglès i francès |
| `panells.js` | Textos dels panells interpretatius en castellà, anglès i francès |
| `fotos/` | Fotografies de les onze parades i portada |

## Funcionalitats

- Joc en 4 idiomes: català (CA), castellà (ES), anglès (EN), francès (FR)
- Navegació per QR: cada parada té un URL únic (`?p=1` … `?p=11`)
- Progrés desat al navegador (localStorage)
- Registre d'equips via Google Forms
- Panells interpretatius amb textos multilingüe (ES / EN / FR)
- Disseny adaptat a mòbil

## URLs de les parades

```
Portada      →  https://ajuntament-talarn.github.io/ruta-urbana/
Parada 1     →  https://ajuntament-talarn.github.io/ruta-urbana/?p=1
Parada 11    →  https://ajuntament-talarn.github.io/ruta-urbana/?p=11
En francès   →  https://ajuntament-talarn.github.io/ruta-urbana/?p=3&l=fr
Panells      →  https://ajuntament-talarn.github.io/ruta-urbana/?view=panells
```

## Manteniment

Els textos del joc es poden actualitzar editant `textos.js`. Els textos dels panells, editant `panells.js`. Cap dels dos fitxers afecta el funcionament del joc si s'editen correctament.

---

*Ajuntament de Talarn · Geoparc Mundial UNESCO Orígens*
