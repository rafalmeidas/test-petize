import { formatUpdatedDate } from "../../utils/dateFnsUtils";

describe("dateFnsUtils", () => {
  it("retorna 'Atualizado ontem' para uma data de ontem", () => {
    const isoDate = "2023-08-22T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe("Atualizado ontem");
  });

  it("retorna 'Atualizado há 8 dias' para uma data há 8 dias", () => {
    const isoDate = "2023-08-15T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe(
      "Atualizado há 8 dias"
    );
  });

  it("retorna 'Atualizado em 10 de agosto' para uma data dentro do mesmo mês", () => {
    const isoDate = "2023-08-10T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe(
      "Atualizado há 13 dias"
    );
  });

  it("retorna 'Atualizado há 8 meses' para uma data há 8 meses", () => {
    const isoDate = "2022-12-15T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe(
      "Atualizado há 8 meses"
    );
  });

  it("retorna 'Atualizado há 5 anos' para uma data há 5 anos", () => {
    const isoDate = "2018-08-15T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe(
      "Atualizado há 5 anos"
    );
  });

  it("retorna 'Atualizado há 11 anos' para uma data há 11 anos", () => {
    const isoDate = "2012-08-15T12:00:00Z";
    const currentDate = new Date("2023-08-23T12:00:00Z");
    expect(formatUpdatedDate(isoDate, currentDate)).toBe(
      "Atualizado há 11 anos"
    );
  });
});
