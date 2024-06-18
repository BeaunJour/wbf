function showTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all tabs
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Add active class to the clicked tab
    const activeTabButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
    if (activeTabButton) {
        activeTabButton.classList.add('active');
    }
}

// Initial display of the first tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('content1');
});