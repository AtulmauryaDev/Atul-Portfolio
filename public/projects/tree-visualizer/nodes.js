const TREE_COLOR = '#2563eb';
const TREE_STROKE = '#94a3b8';
const SELECTED_COLOR = '#f59e0b';
const TEXT_COLOR = '#ffffff';

function renderTreeAndArray(originalValues, displayedValues, mode) {
  const treeRoot = d3.select('#binary-tree');
  const arrayRoot = d3.select('#array-visual');
  treeRoot.selectAll('*').remove();
  arrayRoot.selectAll('*').remove();

  const originalItems = originalValues.map((value, sourceIndex) => ({ value, sourceIndex }));
  const displayItems = mode === 'bst'
    ? originalItems.slice().sort((a, b) => a.value - b.value || a.sourceIndex - b.sourceIndex)
    : displayedValues.map((value, sourceIndex) => ({ value, sourceIndex }));

  const treeData = mode === 'bst'
    ? buildBalancedTree(displayItems)
    : buildArrayTree(displayItems);

  const nodeCount = displayItems.length;
  const maxDepth = Math.max(1, Math.ceil(Math.log2(nodeCount + 1)));
  const width = Math.max(700, Math.min(1800, Math.pow(2, Math.min(maxDepth, 5)) * 90));
  const height = Math.max(180, maxDepth * 105 + 70);

  const svg = treeRoot.append('svg')
    .attr('class', 'tree-svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', width)
    .attr('height', height)
    .attr('role', 'img')
    .attr('aria-label', 'Interactive tree diagram');

  const root = d3.hierarchy(treeData, (d) => d.children || []);
  const layout = d3.tree().size([width - 100, height - 90]);
  layout(root);

  const chart = svg.append('g').attr('transform', 'translate(50, 35)');

  chart.selectAll('.tree-link')
    .data(root.links())
    .enter()
    .append('line')
    .attr('class', 'tree-link')
    .attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y)
    .attr('stroke', TREE_STROKE)
    .attr('stroke-width', 2);

  const node = chart.selectAll('.tree-node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', 'tree-node')
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('aria-label', (d) => `Tree value ${d.data.value}`)
    .on('click', function(d) { highlightValue(d.data.sourceIndex); })
    .on('keydown', function(d) {
      const event = d3.event;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        highlightValue(d.data.sourceIndex);
      }
    });

  node.append('circle')
    .attr('r', 25)
    .attr('fill', TREE_COLOR)
    .attr('stroke', '#ffffff')
    .attr('stroke-width', 2);

  node.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', TEXT_COLOR)
    .text((d) => d.data.value);

  const arrayItems = mode === 'heap' ? displayItems : originalItems;
  const arrayWidth = Math.max(650, arrayItems.length * 76 + 30);
  const arraySvg = arrayRoot.append('svg')
    .attr('class', 'array-svg')
    .attr('width', arrayWidth)
    .attr('height', 100)
    .attr('viewBox', `0 0 ${arrayWidth} 100`)
    .attr('role', 'img')
    .attr('aria-label', 'Input array visualization');

  const cell = arraySvg.selectAll('.array-cell')
    .data(arrayItems)
    .enter()
    .append('g')
    .attr('class', 'array-cell')
    .attr('transform', (d, i) => `translate(${15 + i * 76}, 25)`)
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('aria-label', (d, i) => `Array index ${i}, value ${d.value}`)
    .on('click', function(d) { highlightValue(d.sourceIndex); })
    .on('keydown', function(d) {
      const event = d3.event;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        highlightValue(d.sourceIndex);
      }
    });

  cell.append('rect')
    .attr('width', 66)
    .attr('height', 42)
    .attr('rx', 7)
    .attr('fill', TREE_COLOR)
    .attr('stroke', '#cbd5e1');

  cell.append('text')
    .attr('class', 'array-value')
    .attr('x', 33)
    .attr('y', 26)
    .attr('text-anchor', 'middle')
    .attr('fill', TEXT_COLOR)
    .text((d) => d.value);

  cell.append('text')
    .attr('class', 'array-index')
    .attr('x', 33)
    .attr('y', 61)
    .attr('text-anchor', 'middle')
    .text((d, i) => `[${i}]`);
}

function buildArrayTree(items) {
  function create(index) {
    if (index >= items.length) return null;
    const item = items[index];
    const children = [create(2 * index + 1), create(2 * index + 2)].filter(Boolean);
    return { ...item, children };
  }
  return create(0);
}

function buildBalancedTree(items) {
  if (!items.length) return null;
  const middle = Math.floor(items.length / 2);
  const item = items[middle];
  const left = buildBalancedTree(items.slice(0, middle));
  const right = buildBalancedTree(items.slice(middle + 1));
  const children = [];
  if (left) children.push(left);
  if (right) children.push(right);
  return { ...item, children };
}

function highlightValue(sourceIndex) {
  d3.selectAll('.tree-node circle')
    .attr('fill', (d) => d.data.sourceIndex === sourceIndex ? SELECTED_COLOR : TREE_COLOR)
    .attr('stroke', (d) => d.data.sourceIndex === sourceIndex ? '#92400e' : '#ffffff');

  d3.selectAll('.array-cell rect')
    .attr('fill', (d) => d.sourceIndex === sourceIndex ? SELECTED_COLOR : TREE_COLOR)
    .attr('stroke', (d) => d.sourceIndex === sourceIndex ? '#92400e' : '#cbd5e1');
}
