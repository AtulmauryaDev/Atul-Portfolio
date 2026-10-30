const DEFAULT_VALUES = [100, 80, 40, 30, 70, 20, 50];
const MAX_VALUES = 63;
let currentValues = DEFAULT_VALUES.slice();

function parseInputValues() {
  const inputText = document.getElementById('array-input').value.trim();
  const error = document.getElementById('error-message');
  error.textContent = '';

  if (!inputText) {
    error.textContent = 'Please enter at least one integer.';
    return null;
  }

  const tokens = inputText.split(/[\s,]+/).filter(Boolean);
  if (tokens.length > MAX_VALUES) {
    error.textContent = `Please enter no more than ${MAX_VALUES} values so the tree stays readable.`;
    return null;
  }

  const values = tokens.map((token) => Number(token));
  if (values.some((value) => !Number.isSafeInteger(value))) {
    error.textContent = 'Only whole numbers are supported. Separate values with commas or spaces.';
    return null;
  }

  return values;
}

function renderMode(mode) {
  const values = parseInputValues();
  if (!values) return;

  currentValues = values.slice();
  let displayValues = values.slice();
  let title = 'Binary Tree and Array';
  let instructions = 'Select a node or array cell to highlight the matching value.';

  if (mode === 'heap') {
    displayValues = makeHeap(values.slice());
    title = 'Max-Heap and Array';
    instructions = 'Every parent is greater than or equal to its children. Select a node or array cell to highlight it.';
  } else if (mode === 'bst') {
    title = 'Balanced Binary Search Tree';
    instructions = 'Values are arranged in sorted order: values on the left are smaller than or equal to the node, and values on the right are greater than or equal to it.';
  }

  document.getElementById('visual-title').textContent = title;
  document.getElementById('instructions').textContent = instructions;
  renderTreeAndArray(values, displayValues, mode);
}

function treeAndArray() {
  renderMode('binary');
}

function heapify() {
  renderMode('heap');
}

function createBinarySearchTree() {
  renderMode('bst');
}

function resetVisualization() {
  d3.select('#binary-tree').selectAll('*').remove();
  d3.select('#array-visual').selectAll('*').remove();
  document.getElementById('error-message').textContent = '';
  document.getElementById('visual-title').textContent = 'Tree Visualizer';
  document.getElementById('instructions').textContent = 'Choose a visualization above to get started.';
}

// Render the default example on initial page load.
window.addEventListener('DOMContentLoaded', () => {
  renderMode('binary');
  document.getElementById('array-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') treeAndArray();
  });
});
