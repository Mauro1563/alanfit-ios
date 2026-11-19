# Alan Fit para iPhone (App Store)

App nativa con [Capacitor](https://capacitorjs.com) que abre https://alanfit.vercel.app. Cada cambio publicado
en Vercel llega a la app sin pasar otra vez por la tienda (salvo cambios nativos).

Lo nativo (ayuda con la regla 4.2 de Apple, «no es solo una web»):
- Aviso con sonido cuando termina el descanso, aunque el iPhone esté bloqueado (notificación local).
- Vibración real (Haptics) al terminar el descanso (Safari no vibra).
- Cámara y fotos nativas para los controles corporales; hoja de compartir nativa.
- Pantalla de inicio, icono, barra de estado y pantalla sin conexión propias.

## Compilar sin Mac (GitHub Actions)
1. Cargar los secretos `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_KEY_P8` (ver `.github/workflows/ios.yml`).
2. Crear la ficha de la app en App Store Connect con el bundle `com.alanfit.app`.
3. Actions → **iOS → TestFlight** → Run workflow. El build aparece en TestFlight en ~15 min.

## Compilar con Mac (Xcode)
```bash
cd native && npm run setup && npm run ios
```
Team `R5YZJGFXKN`, firma automática → Product → Archive → Distribute → App Store Connect.

Ficha de la tienda: [`store/STORE.md`](store/STORE.md).
