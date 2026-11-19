# Alan Fit para iPhone (App Store)

App nativa con [Capacitor](https://capacitorjs.com) que abre https://alanfit.vercel.app. Cada cambio publicado
en Vercel llega a la app sin pasar otra vez por la tienda (salvo cambios nativos).

Lo nativo (ayuda con la regla 4.2 de Apple, «no es solo una web»):
- Aviso con sonido cuando termina el descanso, aunque el iPhone esté bloqueado (notificación local).
- Vibración real (Haptics) al terminar el descanso (Safari no vibra).
- Cámara y fotos nativas para los controles corporales; hoja de compartir nativa.
- Pantalla de inicio, icono, barra de estado y pantalla sin conexión propias.

## Compilar sin Mac (GitHub Actions)
La compilación se hace en el repositorio público **https://github.com/Mauro1563/alanfit-ios** (los Mac de
GitHub son gratis en repos públicos). Ese repo tiene solo esta carpeta `native/` y el workflow; cada push a su
`main` que toque `native/**` compila y sube un build nuevo a TestFlight. Si cambiás algo acá en `native/`,
copialo también allá.

## Compilar con Mac (Xcode)
```bash
cd native && npm run setup && npm run ios
```
Team `R5YZJGFXKN`, firma automática → Product → Archive → Distribute → App Store Connect.

Ficha de la tienda: [`store/STORE.md`](store/STORE.md).
