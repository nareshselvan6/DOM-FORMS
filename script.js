
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const tableBody = document.querySelector('#table table tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
        const address = document.getElementById('address').value;
        const favFoods = Array.from(document.querySelectorAll('.foods input[type="checkbox"]:checked'))
                            .map(input => input.nextElementSibling.textContent)

                            if (favFoods.length < 2) {
                                alert('Please select at least two foods!');
                                return; // Exit the function if condition is not met
                            }
        const state = document.getElementById('states').value;

        // Create table row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${favFoods}</td>
            <td>${state}</td>
        `;

        // Append row to table
        tableBody.appendChild(row);

        // Reset form
        form.reset();
    });
});
