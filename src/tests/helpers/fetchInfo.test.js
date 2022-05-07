import fetchInfo from "../../helpers/fetchInfo";

test("should at least return 5 elements from fetch", async () => {
	const designs = await fetchInfo("designs");
	const setouts = await fetchInfo("setouts");

	expect(designs.length).toBeGreaterThanOrEqual(5);
	expect(setouts.length).toBeGreaterThanOrEqual(5);
});