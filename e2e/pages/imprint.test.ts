import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("imprint page", () => {
	test("should have document title", async ({ page }) => {
		await page.goto("/imprint");
		await expect(page).toHaveTitle("Imprint | ACDH-CH Website");
	});

	test("should have imprint text", async ({ page }) => {
		await page.goto("/imprint");
		await expect(page.getByRole("main")).toContainText("Legal disclosure");
	});

	test("should not have any automatically detectable accessibility issues", async ({ page }) => {
		await page.goto("/");
		expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
	});
});
