export function patchedFocus(element: HTMLElement | null): void {
  if (!element) return;
  console.log("Patched focus applied!");
  element.focus();
}
