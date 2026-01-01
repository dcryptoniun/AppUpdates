// Fetch and display app updates
async function loadAppUpdates() {
    try {
        const response = await fetch('appupdate.json');
        if (!response.ok) {
            throw new Error('Failed to load app updates');
        }
        const data = await response.json();
        
        displayApps(data.apps);
        updateLastUpdated();
    } catch (error) {
        console.error('Error loading app updates:', error);
        showError('apps-list');
    }
}

function displayApps(apps) {
    const appsContainer = document.getElementById('apps-list');
    
    if (!apps || apps.length === 0) {
        appsContainer.innerHTML = '<div class="loading">No apps available</div>';
        return;
    }
    
    appsContainer.innerHTML = apps.map(app => createAppCard(app)).join('');
}

function createAppCard(app) {
    const statusClass = `status-${app.update_type || 'optional'}`;
    const storeLink = app.store_url ? `<a href="${escapeHtml(app.store_url)}" target="_blank" rel="noopener noreferrer" class="store-link">View in Store</a>` : '';
    
    return `
        <div class="item-card">
            <div class="item-header">
                <h3 class="item-name">${escapeHtml(app.app_name)}</h3>
                <div class="item-version">v${escapeHtml(app.latest_version)}</div>
                <span class="status-badge ${statusClass}">${escapeHtml(app.update_type || 'optional')}</span>
            </div>
            <p class="item-package">${escapeHtml(app.package_name)}</p>
            <p class="item-description">${escapeHtml(app.update_message || 'No update message available')}</p>
            <p class="item-min-version">Minimum version: ${escapeHtml(app.min_version)}</p>
            ${storeLink}
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showError(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="error">Failed to load data. Please try again later.</div>';
}

function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    const now = new Date();
    lastUpdatedElement.textContent = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadAppUpdates);
