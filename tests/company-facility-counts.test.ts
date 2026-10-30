import { expect, test } from "bun:test";
import { companyFacilityCounts } from "../src/lib/company-facility-counts";

test("Venus Group has five manufacturing plants", () => {
  expect(companyFacilityCounts.manufacturingPlants).toBe(5);
});

test("Venus Auto is counted separately as one automotive service facility", () => {
  expect(companyFacilityCounts.automotiveServiceFacilities).toBe(1);
  expect(
    companyFacilityCounts.manufacturingPlants + companyFacilityCounts.automotiveServiceFacilities,
  ).toBe(6);
});