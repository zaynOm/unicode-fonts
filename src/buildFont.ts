export function buildFont(
  aMayus: number | number[],
  aLower: number | number[],
  digit0: number | number[],
  missing: string[],
  name: string,
  description = ""
) {
  const font: number[][] = [];
  for (let i = 65; i < 91; i++) {
    const value = typeof aMayus === "number" ? aMayus + i - 65 : aMayus[i - 65];
    font.push([i, value]);
  }
  for (let i = 97; i < 123; i++) {
    const value = typeof aLower === "number" ? aLower + i - 97 : aLower[i - 97];
    font.push([i, value]);
  }
  for (let i = 48; i < 58; i++) {
    const value = typeof digit0 === "number" ? digit0 + i - 48 : digit0[i - 48];
    font.push([i, value]);
  }
  return { chars: font, missing: missing, name, description };
}
