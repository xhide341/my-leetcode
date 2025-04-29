TIME COMPLEXITY

| Code Pattern                           | Time Complexity |
| -------------------------------------- | --------------- |
| Single loop over `n` items             | O(n)            |
| Nested loop (2 levels)                 | O(n²)           |
| Triple nested loop                     | O(n³)           |
| Loop with index doubling (`i *= 2`)    | O(log n)        |
| Sorting array                          | O(n log n)      |
| Loop through array with hashmap lookup | O(n)            |
| Binary search                          | O(log n)        |
| Recursion tree (e.g., Fibonacci)       | O(2^n)          |
| DFS/BFS over graph or tree             | O(V + E)        |

SPACE COMPLEXITY

| Code Pattern                       | Space Complexity |
| ---------------------------------- | ---------------- |
| Using fixed number of variables    | O(1)             |
| Creating new array of size `n`     | O(n)             |
| Recursion stack (depth = `n`)      | O(n)             |
| Hashmap/Set storing `n` items      | O(n)             |
| 2D array or matrix of size `n x n` | O(n²)            |

🧠 Tips to Memorize
Loops = Time

Data structures = Space

If you store stuff, count the size.

If you recurse, count the depth.
