import { THEME } from '../src/shared/Constants/Tokens'
import fs from 'fs'

let cssContent = `/* AUTO-GENERATED FILE - DO NOT EDIT. TO ADD NEW STYLES, GO TO src/shared/Constants/Tokens.ts */
:root {
`;

cssContent += `\t /* COLORS */\n`;
Object.entries(THEME.COLORS).forEach(([key, val]) => {
    cssContent += `\t--${key}: ${val};\n`;
})

cssContent += `\n\t /* FONT SIZES */\n`;
Object.entries(THEME.FONT_SIZE).forEach(([key, val]) => {
    cssContent += `\t--fs-${key}: ${val};\n`;
})

cssContent += `\n\t /* FONT WEIGTHS */\n`;
Object.entries(THEME.FONT_WEIGHT).forEach(([key, val]) => {
    cssContent += `\t--fw-${key}: ${val};\n`;
})

cssContent += `\n\t /* LINE HEIGHTS */\n`;
Object.entries(THEME.LINE_HEIGHT).forEach(([key, val]) => {
    cssContent += `\t--lh-${key}: ${val};\n`;
})

cssContent += `\n\t /* OPACITY */\n`;
Object.entries(THEME.OPACITY).forEach(([key, val]) => {
    cssContent += `\t--op-${key}: ${val};\n`;
})

cssContent += `\n\t /* RADIUS */\n`;
Object.entries(THEME.RADIUS).forEach(([key, val]) => {
    cssContent += `\t--rd-${key}: ${val};\n`;
})

cssContent += `\n\t /* SPACING */\n`;
Object.entries(THEME.SPACING).forEach(([key, val]) => {
    cssContent += `\t--sp-${key}: ${val};\n`;
})

cssContent += `\n\t /* Z INDEX */\n`;
Object.entries(THEME.Z_INDEX).forEach(([key, val]) => {
    cssContent += `\t--z-${key}: ${val};\n`;
})

cssContent += '}'

cssContent += `\n/* if u read dis u gay */\n`;

fs.writeFileSync('./src/theme-css.css', cssContent)
console.log("CSS THEME CREATED")