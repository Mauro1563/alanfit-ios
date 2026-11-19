// Icono, pantalla de inicio y ajustes del proyecto Xcode (solo iPhone, equipo, versión y build).
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
const A = "ios/App/App/Assets.xcassets";
copyFileSync("resources/icon.png", `${A}/AppIcon.appiconset/AppIcon-512@2x.png`);
for (const f of ["splash-2732x2732.png", "splash-2732x2732-1.png", "splash-2732x2732-2.png"])
  copyFileSync("resources/splash.png", `${A}/Splash.imageset/${f}`);
const P = "ios/App/App.xcodeproj/project.pbxproj";
let s = readFileSync(P, "utf8");
s = s.replace(/TARGETED_DEVICE_FAMILY = "1,2";/g, "TARGETED_DEVICE_FAMILY = 1;");
if (process.env.TEAM_ID && !s.includes("DEVELOPMENT_TEAM"))
  s = s.replace(/CODE_SIGN_STYLE = Automatic;/g, `CODE_SIGN_STYLE = Automatic;\n\t\t\t\tDEVELOPMENT_TEAM = ${process.env.TEAM_ID};`);
if (process.env.APP_VERSION) s = s.replace(/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${process.env.APP_VERSION};`);
if (process.env.BUILD_NUMBER) s = s.replace(/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${process.env.BUILD_NUMBER};`);
writeFileSync(P, s);
console.log("Iconos y proyecto listos");
