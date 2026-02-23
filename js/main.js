/* ── Tab switching ────────────────────────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

/* ── Opinion piece helpers ────────────────────────────────────────────────── */

/**
 * Convert plain text to HTML.
 * - Blank-line-separated blocks become <p> tags
 * - Lines starting with "## " become <p class="opinion-subhead">
 */
function parseContent(text) {
  return text.trim().split(/\n\n+/).map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('## ')) {
      return `<p class="opinion-subhead">${block.slice(3)}</p>`;
    }
    return `<p>${block}</p>`;
  }).join('\n');
}

function toggleOpinion(slug) {
  const body   = document.getElementById('op-body-' + slug);
  const btn    = document.getElementById('op-toggle-' + slug);
  const hidden = body.hasAttribute('hidden');
  body.toggleAttribute('hidden', !hidden);
  btn.textContent = hidden ? 'Close ↑' : 'Read ↓';
}

/* ── Render opinion pieces from window.OPINIONS ──────────────────────────── */
function renderOpinionPieces() {
  const container = document.getElementById('opinion-list');
  if (!container) return;

  if (!window.OPINIONS || window.OPINIONS.length === 0) {
    container.innerHTML = `
      <p style="color:var(--text-light);font-style:italic;padding:2rem 0">
        No opinion pieces yet.
      </p>`;
    return;
  }

  container.innerHTML = window.OPINIONS.map((op, i) => `
    <div class="opinion-card">
      <div class="opinion-header" onclick="toggleOpinion('${op.slug}')">
        <div>
          <p class="opinion-tag">${op.tag || 'Opinion'}</p>
          <h2 class="opinion-title">${op.title}</h2>
          ${op.date ? `<p class="opinion-date">${op.date}</p>` : ''}
        </div>
        <button class="opinion-toggle-btn" id="op-toggle-${op.slug}"
                aria-expanded="${i === 0}"
                aria-controls="op-body-${op.slug}">
          ${i === 0 ? 'Close ↑' : 'Read ↓'}
        </button>
      </div>
      <div class="opinion-body" id="op-body-${op.slug}" ${i === 0 ? '' : 'hidden'}>
        ${parseContent(op.content)}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderOpinionPieces);
