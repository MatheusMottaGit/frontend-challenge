function priceFormater(priceInCents: number): string | undefined {
  return (priceInCents / 100).toFixed(2);
}