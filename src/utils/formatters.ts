export const formatMoneyBrl = (value: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", { currency: "BRL" });
  return formatter.format(value);
};
