# Ficha de App Store — Alan Fit (borrador)

| Campo | Valor propuesto |
|---|---|
| Nombre (30) | **Alan Fit** (si está tomado: `Alan Fit: Entrenamiento`) |
| Subtítulo (30) | `Tu plan de gym, serie a serie` |
| Bundle ID | `com.alanfit.app` |
| SKU | `alanfit-ios` |
| Idioma principal | Español (España o México, a elegir) + inglés y portugués (Brasil) |
| Categoría | Salud y forma física (secundaria: Estilo de vida) |
| Precio | Gratis, sin compras dentro de la app |
| Edad | 4+ / 9+ (sin contenido sensible). Contestar «No» a todo salvo lo que aplique |
| URL de privacidad | https://alanfit.vercel.app/privacidad |
| URL de soporte | https://alanfit.vercel.app/soporte |
| Copyright | 2026 Hernan Mauricio Morales Londoño |
| Dispositivos | Solo iPhone (no iPad → no hacen falta capturas de iPad) |

## Texto promocional (170)
Plan de hipertrofia hecho para vos: ejercicios con video, temporizador de descanso con aviso y todas tus series anotadas.

## Descripción
Alan Fit te arma un plan de entrenamiento según dónde entrenás (gimnasio, casa o calistenia) y cuántos días por semana podés.

• Plan automático de 3 a 6 días, con ejercicios elegidos para tu lugar.
• Entrenamiento guiado: foto, técnica y video de cada ejercicio.
• Anotá peso y repeticiones de cada serie; la app recuerda lo que usaste la última vez.
• Temporizador de descanso que te avisa con sonido y vibración aunque tengas el teléfono bloqueado.
• Semana, racha, mejores marcas, progreso e historial.
• Controles corporales: peso, cintura y fotos de progreso privadas.
• ¿Tenés entrenador? Ingresá su código: te arma el plan, ve tu progreso y te responde. Incluye Coach IA opcional.
• Sin cuentas ni publicidad. En español, portugués e inglés.

## Palabras clave (100)
gym,rutina,hipertrofia,entrenamiento,pesas,musculación,fuerza,calistenia,plan,series,coach,ejercicio

## Notas para el revisor (App Review)
The app does not require an account. Open it, choose a language, enter any name, choose a training place and days, and tap
"Build my plan". Tap "Start" to run a guided workout; completing a set starts the rest timer, which fires a local
notification and native haptics when it ends (even with the screen locked).
Coach mode (optional): enter the demo coach code **XXXX-XXXX** (Profile → "I have a coach code") to see the plan assigned
by a trainer, body check-ins and the AI Coach (requires consent; data is sent to Anthropic only after the user agrees).
No in-app purchases, no ads, no tracking.

## Privacidad de la app (etiquetas de App Store Connect)
- Rastreo: **No**.
- Datos recolectados (solo en modo entrenador, vinculados al usuario, no para rastreo, finalidad «Funcionalidad de la app»):
  - Salud y forma física → Fitness (series, pesos) y Salud (peso corporal, medidas).
  - Información de contacto → Nombre; Teléfono/Correo si escribe al entrenador.
  - Contenido del usuario → Fotos (fotos de progreso), Otro contenido (mensajes al coach).
- Sin código de entrenador nada sale del teléfono.

## Capturas (iPhone 6,9″, 1320 × 2868)
`store/screens/`: 01-bienvenida, 02-hoy, 03-entrenamiento. Faltan 2–3 más (progreso, rutina, coach) — mínimo 1, ideal 5.
