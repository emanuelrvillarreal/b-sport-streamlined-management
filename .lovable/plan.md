# Plan: Landing page B Sport

## Objetivo
Reemplazar el placeholder actual por una landing page moderna, profesional y 100% responsive para B Sport, plataforma SaaS de gestión deportiva.

## Alcance
- Una sola página (`src/routes/index.tsx`) con navegación por anclajes.
- Sin backend ni formularios complejos: el canal de contacto principal es WhatsApp.
- Estilo deportivo, confiable y limpio; paleta azul + acento energético (verde/naranja).

## Pasos de implementación

1. **Diseño visual**
   - Definir tokens semánticos en `src/styles.css`: azules principales, acento energético, tipografía sans-serif, espaciado consistente.
   - Mantener modo claro por defecto, preparado para dark mode con los tokens existentes.

2. **Secciones a construir en `src/routes/index.tsx`**
   - **Navbar fijo**: logo "B Sport", anclajes a Hero, Funcionalidades, Público, Beneficios, Contacto.
   - **Hero**: título, subtítulo, bajada, CTA principal a WhatsApp e imagen/ilustración representativa.
   - **Funcionalidades destacadas**: grid de 6 tarjetas con icono deportivo, título y descripción.
   - **¿Para quién es B Sport?**: 3 tarjetas verticales (Clubes, Gimnasios, Canchas).
   - **Por qué elegir B Sport**: 4 beneficios cortos.
   - **Cómo funciona**: 3 pasos simples.
   - **CTA final**: invitación al contacto y botón grande a WhatsApp.
   - **Footer**: logo, datos de contacto, créditos simples.
   - **Botón flotante de WhatsApp** fijo en esquina inferior derecha.

3. **WhatsApp como canal principal**
   - Todos los CTAs apuntan a `https://wa.me/5491143991220?text=Hola,%20quiero%20conocer%20más%20sobre%20B%20Sport`.
   - Links con `target="_blank" rel="noopener noreferrer"`.

4. **Iconografía**
   - Usar `lucide-react` para iconos limpios y coherentes; mantener la iconografía deportiva sutil.

5. **Metadata y SEO**
   - Agregar `head()` en `src/routes/index.tsx` con título, descripción, Open Graph y Twitter Card propios de B Sport.

6. **Verificación**
   - Revisar el preview en desktop y mobile.
   - Confirmar que los anchor links, CTAs y el botón flotante funcionan correctamente.
