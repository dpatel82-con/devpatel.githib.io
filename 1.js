function toggleDropdown(event) {
    // Prevent the click event from closing other dropdowns
    event.stopPropagation();
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (dropdown !== event.currentTarget) {
            dropdown.classList.remove('show');
        }
    });

    // Toggle the current dropdown
    event.currentTarget.classList.toggle('show');
}

// Close dropdowns if clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
});
