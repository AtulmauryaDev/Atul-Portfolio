# Tree Visualizer

An interactive browser-based visualizer for learning how arrays relate to common tree data structures. Built with HTML, CSS, JavaScript, and D3.js v5.

## Features

- **Binary Tree:** displays the input values using array-index relationships.
- **Max-Heap:** builds a max-heap using bottom-up heapification.
- **Balanced Binary Search Tree:** sorts the input values and builds a balanced tree from the sorted values.
- Click or keyboard-select a tree node or array cell to highlight the corresponding input value.
- Input validation for empty input, invalid integers, and very large arrays.
- Responsive layout and horizontal scrolling for wide visualizations.

## Run locally

1. Download or clone this repository.
2. Open `index1.html` in a browser while connected to the internet (D3.js v5 is loaded from its CDN).
3. Enter integers separated by commas or spaces, then select a visualization mode.

You can also run a local server from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index1.html`.

## Input example

```text
100, 80, 40, 30, 70, 20, 50
```

For legibility, the visualizer accepts up to 63 values. Large trees may still require horizontal scrolling.

## How it works

- In **Binary Tree** and **Max-Heap** modes, the tree uses array indices: left child `2i + 1`, right child `2i + 2`.
- In **Max-Heap** mode, the array is rearranged so every parent is greater than or equal to its children. The implementation uses bottom-up heap construction, which is `O(n)`.
- In **Binary Search Tree** mode, values are sorted and recursively divided around the middle element to create a balanced tree. This is a balanced-tree visualization, not a simulation of inserting values one by one into an ordinary BST.

## Technology

- HTML5 and CSS3
- JavaScript
- D3.js v5 (loaded from `https://d3js.org/d3.v5.min.js`)

## Notes

This is a client-side learning project. It does not require a backend or database. The project uses `index1.html` as its entry point to preserve the original filename.
