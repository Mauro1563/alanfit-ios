// Deja en Info.plist los textos de permisos que Apple exige (cámara y fotos para los controles corporales),
// la versión y el número de build. Se puede correr varias veces sin duplicar nada.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const path = "ios/App/App/Info.plist";
if (!existsSync(path)) { console.error("Falta ios/: corré primero `npx cap add ios`"); process.exit(1); }
let xml = readFileSync(path, "utf8");
const set = (key, value) => {
  const re = new RegExp(`<key>${key}</key>\\s*<string>[^<]*</string>`);
  const entry = `<key>${key}</key>\n\t<string>${value}</string>`;
  xml = re.test(xml) ? xml.replace(re, entry) : xml.replace(/<dict>/, `<dict>\n\t${entry}`);
};
set("CFBundleDisplayName", "Alan Fit");
set("NSCameraUsageDescription", "Alan Fit usa la cámara para las fotos de tus controles corporales (progreso).");
set("NSPhotoLibraryUsageDescription", "Alan Fit usa tus fotos para adjuntarlas a tus controles corporales.");
set("NSPhotoLibraryAddUsageDescription", "Alan Fit guarda en tus fotos el respaldo que elijas descargar.");
set("ITSAppUsesNonExemptEncryption", "false");
if (!/<key>ITSAppUsesNonExemptEncryption<\/key>\s*<false\/>/.test(xml)) {
  xml = xml.replace(/<key>ITSAppUsesNonExemptEncryption<\/key>\s*<string>false<\/string>/, "<key>ITSAppUsesNonExemptEncryption</key>\n\t<false/>");
}
if (process.env.APP_VERSION) set("CFBundleShortVersionString", process.env.APP_VERSION);
if (process.env.BUILD_NUMBER) set("CFBundleVersion", process.env.BUILD_NUMBER);
writeFileSync(path, xml);
console.log("Info.plist listo");
