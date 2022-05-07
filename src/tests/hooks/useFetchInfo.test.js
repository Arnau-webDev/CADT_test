// import { useFetchInfo } from "../../hooks/useFetchInfo";
// import { renderHook } from "@testing-library/react-hooks/pure";

// describe("custom hook useFetchInfo tests", () => {
// 	const table = "designs";

// 	test("should return the initial state", async () => {
// 		const { result, waitForNextUpdate } = renderHook(() => useFetchInfo(table));  
// 		const { data, loading } = result.current;

// 		await waitForNextUpdate();

// 		expect(data.length).toBe(0);
// 		expect(loading).toBe(true);

// 	});

// 	test("should return an image array and loading to false", async () => {
// 		const { result, waitForNextUpdate,  } = renderHook(() => useFetchInfo(table));  

// 		await waitForNextUpdate();

// 		const { data, loading } = result.current;
        
// 		expect(data.length).toBeGreaterThanOrEqual(5);
// 		expect(loading).toBe(false);

// 	});
// });

test("mock test", () => { ""; });

// renderHook encara entra en conflicte amb React V18, es podria fer un downgrade a React V16 per solucionar-ho pero moltes altres dependencies entrarien en conflicte

/*
A Note about React 18 Support
As part of the changes for React 18, it has been decided that the renderHook API provided by this library will instead be included as official additions to both react-testing-library (PR) and react-native-testing-library (PR) with the intention being to provide a more cohesive and consistent implementation for our users.

Please be patient as we finalise these changes in the respective testing libraries.

*/

// https://www.npmjs.com/package/@testing-library/react-hooks#installation


